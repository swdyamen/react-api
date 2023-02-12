import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

const Dogsimages = (breedsImages) => {
  const imageno = breedsImages.imageno;
  const loading = breedsImages.loading;

  breedsImages = breedsImages.breedsImages;

  return (
    <>
      <Row style={{ margin: "30px" }} className="p-8 max-w-7xl mx-auto">
        <Col md={12} lg={12} xs={12}>
          <Card className="px-3">
            <Card.Body>
              {!loading && (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              )}
              <Row className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 my-10 lg:my-20">
                {breedsImages.slice(0, imageno).map((image, index) => (
                  <Col key={index} lg={4} xs={12}>
                    <Card.Img
                      src={image}
                      className="p-2 bg-light border align-middle"
                      alt=""
                    />
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Dogsimages;
