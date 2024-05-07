import Reviews from "./Reviews";

/*for the reviews section*/
export default function CommentSection() {
    return (
        <div className="commentBox">
            <div><h3 className="C">What people think of this book :</h3></div>
            <Reviews currentUserId={12} />
            
        </div>
        
            
       
    );
}