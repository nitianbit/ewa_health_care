import { sendResponse } from "../../../utils/helper.js";
import { MODULES } from "../../default/utils/helper.js";
import { bulkUploadDoctors, bulkUploadPatients } from "../services/bulkUploadService.js";



export const bulkUpload = async (req, res) => {
    try {
        const { module } = req.body;
        const filePath = req.file?.path;
        let result = null;
        switch (module) {
            case MODULES.PATIENTS:
                result = await bulkUploadPatients(filePath);
                break;
            case MODULES.DOCTOR:
                result = await bulkUploadDoctors(filePath);
                break;
            default:
                break;
        }

        return sendResponse(res, 200, "success", result);
    } catch (error) {
        showError(error);
        return sendResponse(res, 500, "Internal server error", error);
    }
};