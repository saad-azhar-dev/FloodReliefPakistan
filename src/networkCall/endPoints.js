
export const options = {
    method: 'GET',
    // headers: {
    //     'X-RapidAPI-Key': '617f532840mshdbd3be7c11d1040p1e5777jsn4b4dbe72a0c2',
    //     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    // }
}

const api_key = 'AIzaSyDi9pz4aF5uTdDSg7UI-4WzLE0L2qQJEh8'
const base_url = 'https://sheets.googleapis.com/v4/spreadsheets'
const foundraisers_sheet = 'Fundraisers'
const foundraisers_sheet_id = '1iTUqbhr2hUUIWgCBhdtXX26uE1b0N8N-dSbzcvG3Ir4'


export const fundraisers_sheet_link = `${base_url}/${foundraisers_sheet_id}/values/${foundraisers_sheet}?valueRenderOption=FORMATTED_VALUE&key=${api_key}`