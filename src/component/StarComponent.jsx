function StarComponet({ vote }) {
    let round = 0
    let votes = vote
    vote = Math.floor(vote)
    votes = votes - vote




    const stelle = [];
    for (let index = 0; index < 5; index++) {
        if (index < vote) {
            stelle.push(<i key={index} className="fa-solid fa-star text-warning" ></i>)
        } else if (votes > 0.5 && round === 0) {
            stelle.push(<i key={index} className="fa-solid fa-star-half-stroke text-warning"></i>)
            round++
        } else {
            stelle.push(<i key={index} className="fa-regular fa-star text-warning "></i>)
        }
    }
    return stelle;
}
export default StarComponet