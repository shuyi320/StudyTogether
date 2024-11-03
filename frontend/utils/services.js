export const baseUrl = "https://localhost:8080/api";

export const postRequest = async (url, body) => {
    const response = await (url, {
        method: "POST",
        headers: {
            "Content-Type": "applications/json",
        },
        body,
    });

    //Check the data before we return
    const data = await response.json();

    if (!response.ok) {
        let message;

        //Check if we have a message
        if (data?.message) {
            //If we do have a message
            message = data.message;
        } else {
            message = data;
        }

        return { error: true, message };
    }

    return data;
};