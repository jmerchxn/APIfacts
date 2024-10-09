import factModel from "../models/factsModel.js";
import keywordModel from "../models/keywordModel.js";

const getFactsByKeyword = async (req, res) => {
    const { keyword } = req.params;

    try {
        if (!keyword) {
            return res.status(400).json({ msg: "Keyword parameter is required.", data: [] });
        }

        const keywordsResults = await keywordModel.find();
        const factsResults = await factModel.find();

        if (keywordsResults.length === 0) {
            return res.status(404).json({ msg: `No facts found for the keyword: "${keyword}".`, data: [] });
        }

        const factsByKeyword = keywordsResults.map((keyword) => {

            const factosEncontradosPorKeyword = factsResults.filter(fact => {
                const idDelFact = fact.keyword;   
                const idDelKeyword = keyword._id;     
            
                if (idDelFact) {
                    return idDelFact.equals(idDelKeyword); 
                }
                
                return false;
            });

            return {
                keyword,
                facts: factosEncontradosPorKeyword
            };
        });

        res.status(200).json({ msg: "success", data: factsByKeyword });

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal server error", data: [] });
    }
};

export { getFactsByKeyword };
