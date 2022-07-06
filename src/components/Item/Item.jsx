import { Button, Card, Container, Text } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import "./Item.scss";

const Item = ({ item }) => {
	const agregarAlCarrito = cant => {
		console.log(`Seleccionaste ${cant} articulos`);
	};

	return (
		<>
			<Card
				css={{
					mw: "20rem",
					padding: "0",
					margin: "2rem",
				}}
			>
				<Card.Header>
					<Container
						display="flex"
						direction="column"
						className="container"
					>
						<Text b margin={".5rem 0"}>
							{item.nombre}
						</Text>
						<Card.Image
							objectFit="cover"
							className="img-producto"
							width={"10rem"}
							height={"10rem"}
							src={require(`../../assets/productos/${item.nombreArchivo}`)}
							alt={item.nombre}
							css={{
								borderRadius: "1rem",
							}}
						/>
					</Container>
				</Card.Header>
				<Card.Divider />
				<Card.Body
					css={{
						padding: ".5rem 0",
						display: "flex",
						justifyContent: "center",
					}}
				>
					<Container
						display="flex"
						alignItems="center"
						justify="center"
						direction="column"
					>
						<Text
							b
							size={16}
							css={{
								textAlign: "center",
							}}
						>
							{item.descripcion}
						</Text>
						<Text transform="capitalize">{item.categoria}</Text>
						<Button
							color="success"
							auto
							ghost
							css={{ marginTop: "1rem" }}
						>
							$ {item.precio}
						</Button>
					</Container>
				</Card.Body>
				<Card.Divider />
				<Card.Footer
					css={{
						padding: 0,
						display: "flex",
						justifyContent: "center",
						p: "1rem 0",
					}}
				>
					<NavLink to={`/item/${item.id}`}>
						<Button color={"warning"} ghost auto>
							Ir al detalle
						</Button>
					</NavLink>
				</Card.Footer>
			</Card>
		</>
	);
};

export default Item;
