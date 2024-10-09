import { Router } from "express";
import { createFact, getFactsById, getFacts, updateFacts, deleteFactsById } from "../../controllers/factsController.js";
import { getFactsByCategory, getCategory } from "../../controllers/categoryController.js";
import { getFactsByKeyword } from "../../controllers/keywordController.js";
import { getFactsByUniqueId } from "../../controllers/uniqueController.js";

const router = Router();

router.get('/get-facts/', getFacts);
router.post('/create-fact/', createFact);

// fact by id
router.get('/get-fact/:id', getFactsById);
router.put('/put-fact/:id', updateFacts);
router.delete('/delete-fact/:id', deleteFactsById);

// category route
router.get('/get-category', getCategory)
router.get('/get-facts-category/:category', getFactsByCategory);

//keyword route
router.get('/get-facts-keyword/:keyword', getFactsByKeyword);

//uniqueId
router.get('/get-facts-uniqueid/:uniqueId', getFactsByUniqueId);

export default router;