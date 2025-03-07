
export async function postVarietal(varietyData) {
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

export async function postFarmer(farmerData) {
    const url = '/farmers';

    try {
        // Define the headers for the request, including content type and authorization if needed
        const headers = new Headers({
            "Content-Type": "application/json",
        });

        console.log(farmerData);
        // Prepare the JSON body data
        const body = JSON.stringify(farmerData);

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
        console.log('Farmer record posted successfully:', response);

        return response;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        throw error;
    }
}

export async function postOrigin(originData) {
    const url = '/origins';

    try {
        // Define the headers for the request, including content type and authorization if needed
        const headers = new Headers({
            "Content-Type": "application/json",
        });

        console.log(originData);
        // Prepare the JSON body data
        const body = JSON.stringify(originData);

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
        console.log('Origin record posted successfully:', response);

        return response;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        throw error;
    }
}

export async function postProcess(processData) {
    const url = '/processes';

    try {
        // Define the headers for the request, including content type and authorization if needed
        const headers = new Headers({
            "Content-Type": "application/json",
        });

        console.log(processData);
        // Prepare the JSON body data
        const body = JSON.stringify(processData);

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
        console.log('Process record posted successfully:', response);

        return response;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        throw error;
    }
}

export async function postCoffee(coffeeData) {
    const url = '/coffees';

    try {
        // Define the headers for the request, including content type and authorization if needed
        const headers = new Headers({
            "Content-Type": "application/json",
        });

        console.log(coffeeData);
        // Prepare the JSON body data
        const body = JSON.stringify(coffeeData);

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

export async function deleteCoffee(coffeeId) {
    const url = '/coffees/'+coffeeId;

    try {
        // Define the headers for the request, including content type and authorization if needed
        const headers = new Headers({
            "Content-Type": "application/json",
        });

        console.log(url);
        // Prepare the JSON body data


        // Make the POST request using fetch
        const response = await fetch(url, {
            method: 'DELETE',
            headers: headers,
        });

        // Check if the request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the response and return it
        // const result = await response.json();
        console.log('Coffee record deleted successfully:', response);

        return response;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        throw error;
    }
}
