import factModel from "../models/factsModel.js";
import categoryModel from "../models/categoryModel.js";


const getFactsByCategory = async (req, res) => {
    const { category } = req.params;

    try {
        const facts = await factModel.find({ category: category });
        
        if (facts.length === 0) {
            return res.status(404).json({ msg: "No facts found for this category.", data: [] });
        }
        
        res.status(200).json({ msg: "success", data: facts });

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal server error", data: [] });
    }
};

const getCategory = async (req, res) => {
    

    try {
        const categories = await categoryModel.find();        
        
        if (categories.length === 0) {
            return res.status(404).json({ msg: "No categories found.", data: [] });
        }
        
        res.status(200).json({ msg: "success", data: categories });

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal server error", data: [] });
    }
};

export { getFactsByCategory, getCategory };
