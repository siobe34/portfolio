// Example data
type DataTypes = {
    movies: string[];
    anime: string[];
    shows: string[];
    music: string[];
    [key: string]: string[]
}
const dummyData: DataTypes = {
    movies: [
        'Movie Example 1',
        'Movie Example 2',
        'Movie Example 3',
        'Movie Example 4'
    ],
    anime: [
        'Anime Example 1',
        'Anime Example 2',
        'Anime Example 3',
        'Anime Example 4'
    ],
    shows: [
        'Show Example 1',
        'Show Example 2',
        'Show Example 3',
        'Show Example 4'
    ],
    music: [
        'Music Example 1',
        'Music Example 2',
        'Music Example 3',
        'Music Example 4'
    ]
}





// Type validation on createMovie doesn't work

exports.getMovie = () => {
    return dummyData['movies'];
};

exports.createMovie = (input:{title:string, ranking:number}) => {
    // Create instance of Movie Model and add to Database
    try {
        console.log('Creating Movie instance:');
        console.log(`Title: ${input.title}\nRanking: ${input.ranking}`);
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
};

export default exports;