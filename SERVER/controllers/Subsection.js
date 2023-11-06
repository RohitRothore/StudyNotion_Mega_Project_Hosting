const SubSection = require("../models/SubSection");
const Section = require("../models/Section");
const { uploadImageToCloudinary } = require("../utils/ImageUploader");

//create subsection
exports.createSubSection = async (req, res) =>{
    try{
        const { sectionId, title, description} = req.body;

        //extract file/vedio
        const video = req.files.video

        if(!sectionId || !title  || !description || !video){
            return res.status(400).json({
                success:false,
                message:"All fields are required",
            });
        };
        console.log(video)
        //upload video to cloudinary
        const uploadDetails = await uploadImageToCloudinary(video, process.env.FOLDER_NAME);
        console.log(uploadDetails)

        const subSectionDetails = await SubSection.create({
            title:title,
            timeDuration:`${uploadDetails.duration}`,
            description:description,
            videoUrl:uploadDetails.secure_url,
        })

        //update section with this sub section ObjectId
        const updatedSection = await Section.findByIdAndUpdate({_id:sectionId}, { 
            $push:{subSection:subSectionDetails._id}
        }, {new:true}).populate("subSection").exec();

        return res.status(200).json({
            success:true,
            message:"Subsection created successfully",
            data:updatedSection,
        })

    }catch(error){
        console.error("error creating new sub-section", error)
        return res.status(500).json({
            success:false,
            message:"Internal server error",
            error:error.message,
        });
    };
};

//update subsection
exports.updateSubSection = async (req, res) =>{
    try{
        const {sectionId, subSectionId, title,  description, } = req.body;

        const subSection = await SubSection.findById(subSectionId);

        if(!subSection){
            return res.status(404).json({
                success:false,
                message: "SubSection not found",
            })
        }

        if (title !== undefined){
            subSection.title = title;
        }
        if(description !== undefined){
            subSection.description = description;
        }
        if(req.files && req.files.video !== undefined){
            const video = req.files.video;
            const uploadDetails = await uploadImageToCloudinary(
                video,
                process.env.FOLDER_NAME
            )
            subSection.videoUrl = uploadDetails.secure_url;
            subSection.timeDuration = `${uploadDetails.duration}`
        }

        await subSection.save();

        const updatedSection = await Section.findById(sectionId).populate("subSection")
        .exec()


        return res.status(200).json({
            success:true,
            data: updatedSection,
            message:"Subsection updated successfully"
        })


    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Internal server error",
            error:error.message,
        });
    }
}

//delete subsection
exports.deleteSubSection = async (req, res) =>{
    try{
        const {subSectionId, sectionId} = req.body;

        await Section.findByIdAndUpdate(
            {_id:sectionId},
            {
                $pull:{
                    subSection: subSectionId, 
                }
            }
        )

        const subSection = await SubSection.findByIdAndDelete({_id:subSectionId});
        
        if(!subSection){
            return res.status(404).json({
                success:false,
                message: "SubSection not found"
            })
        }

        const updatedSection = await Section.findById(sectionId).populate("subSection")

        return res.status(200).json({
            success:true,
            data: updatedSection,
            message:"Subsection deleted successfully"
        })


    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Internal server error",
            error:error.message,
        });
    }
}