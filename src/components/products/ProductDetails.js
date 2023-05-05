import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "../../App.css";
import StarIcon from "@mui/icons-material/Star";
import { Button } from "@mui/material";
import { addItem } from "../../redux/slices/CartSlice";
import apiService from "../../services/apiService";

import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";

const Root = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "16px",
});

const Form = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "16px",
  width: "100%",
});

const StyledRating = styled(Rating)({
  marginTop: "10px",
});

const ReviewTextField = styled(TextField)({
  marginTop: "10px",
  width: "50%",
});

function ProductDetails() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);

  const handleRatingChange = (event, value) => {
    setRating(value);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newReview = { rating, review };
    setReviews([...reviews, newReview]);
    setRating(0);
    setReview("");
  };

  const [singleData, setSingleData] = useState([]);
  const [images, setImages] = useState([]);
  const [multiImage, setMultiImage] = useState([]);

  const { id } = useParams();
  const dispatch = useDispatch();

  async function productData(id) {
    try {
      let data = await apiService.get(`/products/${id}`);
      console.log(data.data);
      setSingleData(data.data);
      setImages(data.data.images[0]);
      setMultiImage(data.data.images);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    productData(id);
  }, [id]);

  const HandleAddToCart = (singleData) => {
    dispatch(addItem(singleData));
  };

  return (
    <>
      <Box
        className="container"
        sx={{ marginTop: "8%", fontFamily: "sans-serif" }}
      >
        <Box className="main" sx={{ display: "flex", marginLeft: "20px" }}>
          <Box className="multiimage">
            {multiImage.map((img) => {
              return (
                <div>
                  <img
                    style={
                      img === images
                        ? { border: "5px solid red", height: "90px" }
                        : {}
                    }
                    onClick={() => {
                      setImages(img);
                    }}
                    src={img}
                    alt="pro-img"
                    height={70}
                    width={100}
                  />
                </div>
              );
            })}
          </Box>

          <Box className="singleImage" sx={{ paddingLeft: "20px" }}>
            <img src={images} height={375} width={370} alt="product-pic" />
          </Box>

          <Box className="info" sx={{ marginLeft: "10%" }}>
            <Box sx={{ alignItems: "center", display: "flex" }}>
              <b style={{ fontSize: "30px" }}>{singleData.title}</b>
            </Box>

            <Box sx={{ alignItems: "center", display: "flex" }}>
              <p>{singleData.description}</p>
            </Box>

            <Box sx={{ alignItems: "center", display: "flex" }}>
              <p>
                <b>Brand :</b> {singleData.brand}
              </p>
            </Box>

            <Box sx={{ alignItems: "center", display: "flex" }}>
              <p>
                <b>Category :</b> {singleData.category}
              </p>
            </Box>

            <Box sx={{ alignItems: "center", display: "flex" }}>
              <p style={{ alignItems: "center" }}>
                <b>Ratings : {singleData.rating}</b>
                <span style={{ color: "yellow" }}>
                  <StarIcon fontSize="small" />
                </span>
              </p>
            </Box>

            <Box sx={{ alignItems: "center", display: "flex" }}>
              <p>
                <b>Available Quantity :</b> {singleData.stock}
              </p>
            </Box>

            <Box sx={{ alignItems: "center", display: "flex", width: "100%" }}>
              <p style={{ display: "flex", alignItems: "center" }}>
                <b>Price: ${singleData.price}</b>
                <b style={{ marginLeft: "6px", fontSize: "9px", color: "red" }}>
                  -{singleData.discountPercentage}%
                </b>
              </p>
            </Box>

            <Box sx={{ mt: "10px" }}>
              <Button
                sx={{ backgroundColor: "red" }}
                variant="contained"
                onClick={() => {
                  HandleAddToCart(singleData);
                }}
              >
                <b>Add Item To Cart</b>
              </Button>
            </Box>
          </Box>
        </Box>

        <Root>
          <Form>
            <Typography variant="h5">Write a Review</Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <StyledRating
                name="product-rating"
                value={rating}
                onChange={handleRatingChange}
              />
            </Stack>
            <ReviewTextField
              label="Write a review"
              multiline
              rows={4}
              variant="outlined"
              value={review}
              onChange={handleReviewChange}
            />

            <Button
              variant="contained"
              sx={{ mt: "10px" }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Form>

          {reviews.length > 0 ? (
            <div className="root">
              <div className="form">
                <div className="reviews">
                  {reviews.map((r, index) => (
                    <div key={index} className="review">
                      <Rating name="product-rating" value={r.rating} readOnly />
                      <Typography variant="body1">{r.review}</Typography>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <Typography variant="h6">No reviews yet.</Typography>
          )}
        </Root>
      </Box>
    </>
  );
}

export default ProductDetails;
