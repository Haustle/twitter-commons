export default function GivenCard({ profileName = null}){
    return(
        <>
            <div className="card-wrapper">
                <div className="card-container">
                    <div className="profile-image-container">
                        <div className="profile-image"></div>
                    </div>
                    <div className="twitter-at">@{profileName}</div>

                    <div className="profile-details-container">
                        <div className="detail-container">
                            <span>Tweets</span><span className="followers-count">0</span>
                        </div>
                        <div className="detail-container">
                            <span>Followers</span><span className="followers-count">0</span>
                        </div>
                        <div className="detail-container">
                            <span>Following</span><span className="followers-count">0</span>
                        </div>
                    </div>


                </div>

            </div>
            

            <style jsx>{`
                .card-wrapper{
                    width: 250px;
                }
                .detail-container:not(first-child){
                    margin-top: 20px;
                }
                .detail-container{
                    display: flex;
                    justify-content: space-between;

                }
                .followers-count{
                    margin-left: 25px;
                    font-weight: bold;
                }
                .profile-details-container{
                    width: 60%;
                    // border: 1px solid red;
                    margin: 0 auto;
                    margin-top: 30px;

                }
                .twitter-at{
                    margin: 0 auto;
                    width: max-content;
                    // text-decoration: underline;
                    margin-top: 5px;
                    font-size: 1.1rem;
                    font-weight: bold;
                    border-radius: 5px;
                    padding: 5px 10px;
                    cursor: pointer;

                }
                .twitter-at:hover{
                    background-color: #fff59d;
                }
                .profile-image-container{
                    width: max-content;
                    margin: 0 auto;
                    padding: 10px;
                }
                .profile-image{
                    height: 75px;
                    width: 75px;
                    // padding: 10px;
                    border-radius: 50%;
                    background-color: black;
                }
                .card-container{
                    padding: 25px;
                    border-radius: 20px;
                    // background-color: red;
                    // border: 1px solid black;
                }
            `}</style>
        </>
    )
}