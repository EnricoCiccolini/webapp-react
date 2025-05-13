function StarComponet({ vote }) {


    vote = Math.round(vote)
    const stelle = [];
    for (let index = 0; index < 5; index++) {
        if (index < vote) {
            stelle.push(<i key={index} className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>);
        } else {
            stelle.push(<i key={index} className="fa-regular fa-star"></i>);
        }
    }
    return stelle;
}
export default StarComponet