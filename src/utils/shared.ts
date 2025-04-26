import * as Yup from "yup";

/**
 * Validates all inputs in the form based on the provided schema.
 *
 * @param formSchema - The Yup schema that defines validation rules for the form.
 * @param formData - The actual form data to be validated.
 * @returns An object with either all empty strings (if valid) or error messages for each field (if invalid).
 */
export const validateAllInputs = async <T>(
    formSchema: Yup.Schema,
    formData: T
) => {
    try {
        // Validate the entire form data; don't stop at the first error.
        await formSchema.validate(formData, { abortEarly: false });

        // If validation passes, return an object with all keys set to an empty string (no errors).
        const result: { [key in keyof T]: string } = {} as {
            [key in keyof T]: string;
        };

        for (const paramName in formData) {
            const key = paramName as keyof T;

            // Log the input name and value for debugging purposes.
            // console.log("input Name", paramName);
            // console.log("input value", formData[key]);

            result[key] = ""; // No error for this input.
        }

        return { ...result }; // Return the result object.
    } catch (err) {
        // If the error is not a Yup validation error, exit early.
        if (err instanceof Yup.ValidationError == false) return;

        // Build a new errors object with error messages mapped to their field names.
        const newErrors: { [key in keyof T]: string } = {} as {
            [key in keyof T]: string;
        };

        // `err.inner` contains all validation errors.
        err.inner.forEach((error) => {
            if (error.path) {
                const keyPath = error.path as keyof T;

                newErrors[keyPath] = error.message;
            }
        });

        return { ...newErrors }; // Return the errors object.
    }
};

/**
 * Validates a single input field in the form.
 *
 * @param formSchema - The Yup schema that includes validation rules.
 * @param inputName - The name of the input field to validate.
 * @param newValue - The new value for that specific input.
 * @returns An empty string if valid, or an error message if invalid.
 */
export const validateInput = async (
    formSchema: Yup.Schema,
    inputName: string,
    newValue: string
) => {
    try {
        // Construct a minimal form data object with just the field to validate.
        const newFormDataToCheck = { [inputName]: newValue };

        // Log the current input being validated for debugging.
        // console.log("shared", { ...newFormDataToCheck });

        // Validate only the specified field.
        await formSchema.validateAt(inputName, newFormDataToCheck);

        return ""; // No error.
    } catch (err) {
        // Return nothing if the error is not a Yup validation error.
        if (err instanceof Yup.ValidationError == false) return;

        return err.message; // Return the validation error message.
    }
};




/**
 * errorHandler Utility Function
 * Purpose:
 *    This function standardizes error handling across the application.
 *    It extracts and returns a user-friendly error message from an error object,
 *    typically coming from Axios or Fetch API requests.
 * Usage:
 *    Use this function inside service functions to normalize error messages
 *    before throwing them to the UI layer.
 *
 * @param {any} error - The error object caught in a catch block.
 * @returns {string} - A user-friendly error message.
 */
export const errorHandler = (error: any): string => {
    // Check if server responded with a message
    if (error.response?.data?.message) return error.response.data.message;

    // If a generic error message exists, return it
    if (error.message) return error.message;

    // Default fallback message
    return "Something went wrong. Please try again.";
};