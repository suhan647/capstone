import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import apiService from "../../services/apiService";
import {  Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select } from "@mui/material";
import { toast } from "react-toastify";
import { selectedpreferences } from "../../redux/slices/PreferenceSlice";

const PreferencePage = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [display, setDisplay] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [categories, setCategories] = useState([]);


    const params = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const categorybtn = useSelector((state) => state.preference.preferenceData)

        const handlepreference = async (btnname) => {
        setIsLoading(true);
        navigate(`/preference/${btnname}`);
        setSelectedCategory(prev => prev === btnname);
        try {
            let data = await apiService.get(`/products/category/${params.categoryname}`);
            setDisplay(data.data.products);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    }

    const [preferences, setPreferences] = useState([]);
    const getPreferences = async() => {
        try {
          let data = await apiService.get('/products/categories')
        setCategories(data.data)
         } catch (error) {
          toast.error(error)
          console.log(error);
         }
      }

      const handlePreferencesChange = (event) => {
        setPreferences(event.target.value);
    };

      useEffect(() => {
        getPreferences()
        dispatch(selectedpreferences(preferences))

      },[preferences])

    
    return (
        <Box sx={{ mt: "100px" }}>
            <Box sx={{ mb: 4 }}>
                <Typography variant="h4">Preferences</Typography>
            </Box>


            <Box sx={{
                position: 'absolute',
                top: '120px',
                right: '0',
                width: '300px',
                display: "flex",
                flexDirection: "row-reverse",
                mb: 4,
            }}>
                <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="preferences">Preferences</InputLabel>
                    <Select
                        id="preferences"
                        multiple
                        value={preferences}
                        onChange={(e) => handlePreferencesChange(e)}
                        input={<OutlinedInput label="Preferences" />}
                        renderValue={(selected) => selected.join(", ")}
                    >
                        {categories.map((preference) => (
                            <MenuItem key={preference} value={preference}>
                                <Checkbox checked={preferences.indexOf(preference) > -1} />
                                <ListItemText primary={preference} />
                            </MenuItem>
                        ))}

                    </Select>
                </FormControl>
            </Box>

            <Box sx={{ mb: 4 }}>
                <Typography variant="h5"> Your preferences</Typography>
                <Box sx={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                    {categorybtn ? (
                        categorybtn.map((btnname) => {
                            return (
                                <Button
                                    variant={selectedCategory === btnname ? "contained" : "outlined"}
                                    onClick={() => {
                                        handlepreference(btnname);
                                    }}
                                    sx={{ minWidth: "100px", mb: "16px" }}
                                >
                                    {btnname}
                                </Button>
                            );
                        })
                    ) : (
                        <h1>You have not selected any preferences</h1>
                    )}
                </Box>
            </Box>


            <Box sx={{ mb: 4 }}>
                <Typography variant="h5">Selected Products</Typography>
                <Grid container spacing={2} sx={{ display: "flex" }}>
                    {display.map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4} sx={{ height: "100%" }}>
                            <Card sx={{ height: "100%" }}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={product.thumbnail}
                                    alt={product.brand}
                                    style={{ objectFit: "cover", width: "100%", height: '400px' }}
                                />
                                <CardContent>
                                    <Typography variant="subtitle1" sx={{ mb: 1 }}>
                                        {product.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                        {product.description}
                                    </Typography>
                                    <Box display="flex" justifyContent="space-between">
                                        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                                            ${product.price.toFixed(2)}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {product.rating.toFixed(2)} ({product.stock} in stock)
                                        </Typography>
                                    </Box>
                                    <Box sx={{ mt: 2 }}>
                                        <Button variant="contained" color="primary">
                                            Add to Cart
                                        </Button>
                                        <Typography variant="subtitle2" sx={{ mt: 1 }}>
                                            {product.discountPercentage.toFixed(2)}% off
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

        </Box>
    );
};

export default PreferencePage;