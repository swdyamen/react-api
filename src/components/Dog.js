import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Button, Row, Card, Form } from "react-bootstrap";
import Dogsimages from "./Dogsimages";

const BreedURL = "https://dog.ceo/api/breeds/list/all";

function Dog() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [breeds, setBreeds] = useState({});
  const [breedname, setBreedname] = useState("");
  const [breedsImages, setBreedsImages] = useState({});
  const [imageno, setImageno] = useState(0);
  const [subbreeds, setSubbreeds] = useState({});
  const [textv, setTextv] = useState("Please Select Dog Breed:");

  function loadAllBreeds() {
    try {
      axios.get(BreedURL).then((response) => {
        setBreeds(response.data.message);
      });
    } catch (err) {
      setError(err);
    }
  }

  function loadImages(photo) {
    fetch("https://dog.ceo/api/breed/" + photo + "/images")
      .then((response) => response.json())
      .then((data) => setBreedsImages(data.message));
  }

  function loadsubImages(photo, subphoto) {
    fetch("https://dog.ceo/api/breed/" + photo + "/" + subphoto + "/images")
      .then((response) => response.json())
      .then((data) => setBreedsImages(data.message));
  }

  useEffect(() => {
    loadAllBreeds();
  }, []);

  {
    /* Breed select handler*/
  }
  function breedChange(e) {
    const breedsSelection = document.getElementById("breedsSelection").value;
    const subBreedCol = (document.getElementById(
      "breedsCol"
    ).style.borderColor = "#ffffff");

    setTextv("Please Select Dog Sub Breed:");
    setBreedname(e.target.value);
    if (breeds[e.target.value].length > 0) {
      setTextv("Please Select Dog Sub Breed:");
      setSubbreeds(breeds[e.target.value]);
    } else {
      setTextv("Please Select No. of Dogs images");
      setSubbreeds({});
    }
  }

  {
    /* The Submit Button Function */
  }

  function submitButton() {
    {
      /* If we fetch data from API  */
    }
    if (Object.keys(breeds).length > 0) {
      {
        /* if the user select breed  */
      }
      if (Object.keys(breedname).length > 0) {
        {
          /* if there are sub breed */
        }
        if (Object.keys(subbreeds).length > 0) {
          const subBreedSelection =
            document.getElementById("subBreedSelection").value;
          {
            /* if the user did not select sub breed  */
          }
          if (subBreedSelection === "0") {
            const subBreedCol = (document.getElementById(
              "subBreedCol"
            ).style.borderColor = "red");
            {
              /* if the user select sub breed  */
            }
          } else {
            const imageNoSelection =
              document.getElementById("imageNoSelection").value;
            {
              /* if the user did not select No. of images */
            }
            if (imageNoSelection === "0") {
              const imageNoCol = (document.getElementById(
                "imageNoCol"
              ).style.borderColor = "red");
              {
                /* all parameters selected fetch the images and sub images */
              }
            } else {
              setLoading("false");
              const imageNoSelection =
                document.getElementById("imageNoSelection").value;
              setImageno(imageNoSelection);
              const subBreedname =
                document.getElementById("subBreedSelection").value;
              loadsubImages(breedname, subBreedname);
              setTextv("Enjoy Awesome Gallery");
            }
          }
          {
            /* if there is no sub breed */
          }
        } else {
          const imageNoSelection =
            document.getElementById("imageNoSelection").value;
          {
            /* if the user did not select No. of Images */
          }
          if (imageNoSelection === "0") {
            const imageNoCol = (document.getElementById(
              "imageNoCol"
            ).style.borderColor = "red");
            {
              /* if the user select breed and No. of Images fetch the images */
            }
          } else {
            setLoading("false");
            const imageNoSelection =
              document.getElementById("imageNoSelection").value;
            setImageno(imageNoSelection);
            loadImages(breedname);
            setTextv("Enjoy Awesome Gallery");
          }
        }
        {
          /* if the user did not select breed  */
        }
      } else {
        setTextv("Please Select Dog Breed");
        const subBreedCol = (document.getElementById(
          "breedsCol"
        ).style.borderColor = "red");
      }
      {
        /* there are problems fetching data  */
      }
    } else {
      setTextv("There is no connection with Database");
      console.log(error);
    }
  }

  {
    /* Sub breed select handler*/
  }
  function subBreedChange() {
    setTextv("Please Select No. of Dogs images");
    const subBreedCol = (document.getElementById(
      "subBreedCol"
    ).style.borderColor = "#ffffff");
  }

  {
    /* Number of images select handler */
  }
  function imageNoChange() {
    const imageNoCol = (document.getElementById(
      "imageNoCol"
    ).style.borderColor = "#ffffff");
  }

  return (
    <>
      <Row
        style={{ margin: "30px" }}
        className="vh-90 d-flex justify-content-center align-items-center"
      >
        <Col md={8} lg={8} xs={12}>
          <Card className="px-30">
            <div
              style={{ textAlign: "left", margin: "10px", color: "#746AB0" }}
            >
              {textv}
            </div>
            <Card.Body>
              <form
                className="container mt-2 mb-2"
                onSubmit={(event) => event.preventDefault()}
              >
                <Row className="mb-12">
                  <Col
                    style={{
                      textAlign: "left",
                      borderWidth: "3px",
                      borderColor: "#fff",
                      borderStyle: "solid",
                    }}
                    id="breedsCol"
                  >
                    <Form.Label>
                      <Form.Group controlId="formGridState">
                        <Form.Label>Breed</Form.Label>
                        <Form.Select
                          className="form-control"
                          onChange={breedChange}
                          id="breedsSelection"
                        >
                          <option value="0">Choose...</option>

                          {Object.keys(breeds).map((key, index) => (
                            <option key={index} value={key}>
                              {key}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Form.Label>
                  </Col>
                  <Col
                    style={{
                      textAlign: "left",
                      borderWidth: "3px",
                      borderColor: "#fff",
                      borderStyle: "solid",
                    }}
                    id="subBreedCol"
                  >
                    <Form.Label>
                      <Form.Group controlId="formGridState">
                        <Form.Label>Sub breed</Form.Label>
                        <Form.Select
                          className="form-control"
                          name="subbreedsselsct"
                          id="subBreedSelection"
                          onChange={subBreedChange}
                        >
                          <option value="0">Choose...</option>

                          {subbreeds.length > 0
                            ? subbreeds.map((key, index) => (
                                <option key={index} value={key}>
                                  {key}
                                </option>
                              ))
                            : null}
                        </Form.Select>
                      </Form.Group>
                    </Form.Label>
                  </Col>
                  <Col
                    style={{
                      textAlign: "left",
                      borderWidth: "3px",
                      borderColor: "#fff",
                      borderStyle: "solid",
                    }}
                    id="imageNoCol"
                  >
                    <Form.Label>
                      <Form.Group controlId="formGridState">
                        <Form.Label>No. images</Form.Label>
                        <Form.Select
                          className="form-control"
                          onChange={imageNoChange}
                          id="imageNoSelection"
                        >
                          <option value="0">Choose...</option>
                          <option value="3">3</option>
                          <option value="9">9</option>
                          <option value="12">12</option>
                          <option value="15">15</option>
                          <option value="15">18</option>
                          <option value="15">21</option>
                        </Form.Select>
                      </Form.Group>
                    </Form.Label>
                  </Col>
                  <Col style={{ marginTop: "35px" }}>
                    <Form.Group controlId="formGridCheckbox">
                      <Button
                        type="submit"
                        onClick={submitButton}
                        className="me-2 btn btn-primary btn-sx btn-block float-bottm "
                      >
                        View Images
                      </Button>
                    </Form.Group>
                  </Col>
                </Row>
              </form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {breedsImages.length > 0 && (
        <Dogsimages
          breedsImages={breedsImages}
          imageno={imageno}
          loading={loading}
        />
      )}
    </>
  );
}

export default Dog;
