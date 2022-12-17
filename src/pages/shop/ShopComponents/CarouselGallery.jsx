import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from "react-router-dom";

import React from "react";
import {
  Box,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import DATA from "../../../db.json";

export default function ShopCarouselGallery() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5.2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4.2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 520 },
      items: 2.2,
    },
    mobile: {
      breakpoint: { max: 519, min: 0 },
      items: 1.5,
    },
  };

  return (
    <Stack gap={"20px"}>
      <Box>
        <HStack align="baseline">
          <Heading
            fontSize={"30px"}
            fontStyle="italic"
            textAlign={"left"}
            ml={"15px"}
            mt="30px"
          >
            T-SHIRTS
          </Heading>
          <NavLink to="products/Tshirts" style={{ color: "#ed64a6" }}>
            VIEW ALL
          </NavLink>
        </HStack>

        <Carousel responsive={responsive}>
          {DATA.Tshirts.map((product) => (
            <NavLink to={`products/Tshirts/${product.id}`} key={product.image}>
              <Stack m={"15px"} fontSize="18px" textAlign="left">
                <Image src={product.image} alt="t-shirts" />
                <Text>{product.brand}</Text>
                <Text fontWeight={"bold"}>{product.title}</Text>
                <HStack>
                  <Text fontWeight={"bold"}>₹ {product.price}</Text>
                  <strike>{product.maxPrice}</strike>
                  <Text fontWeight={"bold"} color="pink.400">
                    {Math.floor(
                      ((product.maxPrice - product.price) / product.maxPrice) *
                        100
                    )}
                    % off
                  </Text>
                </HStack>
              </Stack>
            </NavLink>
          ))}
        </Carousel>
      </Box>

      <Box>
        <HStack align="baseline">
          <Heading
            fontSize={"30px"}
            fontStyle="italic"
            textAlign={"left"}
            ml={"15px"}
          >
            CYCLES
          </Heading>
          <NavLink to="products/Cycles" style={{ color: "#ed64a6" }}>
            VIEW ALL
          </NavLink>
        </HStack>
        <Carousel responsive={responsive}>
          {DATA.Cycles.map((product) => (
            <NavLink to={`products/Cycles/${product.id}`} key={product.image}>
              <Stack m={"15px"} fontSize="18px" textAlign="left">
                <Image src={product.image} alt="t-shirts" />
                <Text>{product.brand}</Text>
                <Text fontWeight={"bold"}>{product.title}</Text>
                <HStack>
                  <Text fontWeight={"bold"}>₹ {product.price}</Text>
                  <strike>{product.maxPrice}</strike>
                  <Text fontWeight={"bold"} color="pink.400">
                    {Math.floor(
                      ((product.maxPrice - product.price) / product.maxPrice) *
                        100
                    )}
                    % off
                  </Text>
                </HStack>
              </Stack>
            </NavLink>
          ))}
        </Carousel>
      </Box>
      <Box>
        <Heading
          fontSize={"30px"}
          fontStyle="italic"
          textAlign={"left"}
          ml={"15px"}
        >
          GREAT FITNESS SALE
        </Heading>
        <Image
          p={"15px"}
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/6d837cde-ea60-4923-8714-a6aeb4ed44b3.png"
        />
      </Box>
    </Stack>
  );
}
