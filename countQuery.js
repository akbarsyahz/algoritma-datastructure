function countWordsInQuery(input, query) {
    return query.map(q => input.filter(w => w === q).length);
}

const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];
const result = countWordsInQuery(INPUT, QUERY);
console.log(result);