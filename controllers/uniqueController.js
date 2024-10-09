import factModel from "../models/factsModel.js";
import uniqueIdModel from "../models/uniqueIdModel.js";

const getFactsByUniqueId = async (req, res) => {
    const { uniqueId } = req.params;

    try {
        if (!uniqueId) {
            return res.status(400).json({ msg: "uniqueId parameter is required.", data: [] });
        }


        const facts = await factModel.find({ uniqueId: uniqueId });
        
        if (facts.length === 0) {
            return res.status(404).json({ msg: "No facts found for this uniqueId.", data: [] });
        }
       res.status(200).json({ msg: "success", data: facts });

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal server error", data: [] });
    }
};

export { getFactsByUniqueId };

