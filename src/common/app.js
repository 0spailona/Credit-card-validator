import ValidateForm from "../widget/validateForm/js/validateForm";
import constants from "../widget/validateForm/js/constants";

const validateForm = new ValidateForm(constants.minSizeCardNumber,constants.maxSizeCardNumber);
validateForm.bindToDOM();
