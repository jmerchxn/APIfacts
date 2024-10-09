import factModel from "../models/factsModel.js"

const createFact = async (req, res) => {
    const { name } = req.body;
    try {
        const fact = new factModel({ name, completed: false });

        const result = await fact.save();

        res.status(200).json({ msg: "success", data: result });
    } catch (error) {
        res.status(500).json({ msg: "error", data: [] });
        console.error(error);

    }
}

const getFactsById = async (req, res) => {

    const { id } = req.params;
    try {
        const facts = await factModel.findById(id);
        res.status(200).json({ msg: "success", data: facts })

    } catch (error) {
        res.status(500).json({ msg: "error", data: [] })
        console.error(error);

    }
}

const getFacts = async (req, res) => {
    try {
        const facts = await factModel.find();
        res.status(200).json({ msg: "success", data: facts })
        

    } catch (error) {
        res.status(500).json({ msg: "error", data: [] })
        console.error(error);

    }

}

const updateFacts = async (req, res) => {

    const { name, completed } = req.body;
    const { id } = req.params;
    try {
        const fact = new factModel.findByIdAndUpdate(
            id,
            { name, completed },
            { new:true }
        );
        if (!fact) {
            return res.status(404).json({ msg: "fact not found", data: [] });
        }
        res.status(200).json({ msg: "success", data: fact });
    } catch (error) {
        res.status(500).json({ msg: "error", data: [] });
        console.error(error);
    }

}

const deleteFactsById = async (req, res) => {
    const { id } = req.params;
    try {
        const facts = await factModel.findByIdAndDelete(id);
        res.status(200).json({ msg: "success", data: facts })

    } catch (error) {
        res.status(500).json({ msg: "error", data: [] })
        console.error(error);

    }
}

export { createFact, getFactsById, getFacts, updateFacts, deleteFactsById }