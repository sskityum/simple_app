export function Title(text){
    const title = document.createElement('h1');
    title.innerText = text;
    document.getElementById('root').append(title);
}