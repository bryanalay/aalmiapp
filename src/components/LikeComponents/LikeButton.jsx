function LikeButton({liked}){
    return(
        <>
            <button>
                {liked?Liked:Like}
            </button>
        </>
    )
}

export { LikeButton }