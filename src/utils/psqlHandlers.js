
export default async function postVarietal(varietyData) {
    const url = '/varietals';

    try {
        // Define the headers for the request, including content type and authorization if needed
        const headers = new Headers({
            "Content-Type": "application/json",
        });

        console.log(varietyData);
        // Prepare the JSON body data
        const body = JSON.stringify(varietyData);

        console.log(body);

        // Make the POST request using fetch
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: body
        });

        // Check if the request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the response and return it
        // const result = await response.json();
        console.log('Coffee record posted successfully:', response);

        return response;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        throw error;
    }
}
