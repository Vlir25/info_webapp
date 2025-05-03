import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { FaLinkedin } from "react-icons/fa";

const OurTeamCard = ({ member, translation }) => {
  return (
    <Card className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg shadow-lg">
      {/* Imagen */}
      <CardHeader floated={false} className="h-80">
        <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
      </CardHeader>

      {/* Información */}
      <CardBody className="text-left">
        <Typography variant="h4"  className="text-primary mb-2 font-bold">
          {member.name}
        </Typography>
        <Typography color="gray" className="font-semibold">
          {member.role || "Colaborador"} {/* Cargo o "Colaborador" por defecto */}
        </Typography>
        <Typography color="blue-gray" className="text-sm mt-2">
          {translation || "Descripción no disponible"} {/* Info traducida */}
        </Typography>
      </CardBody>

      {/* Redes Sociales */}
      <CardFooter className="flex justify-start gap-4 pt-2">
        {member.linkedIn && (
          <Tooltip content="LinkedIn">
            <a href={member.linkedIn} target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={20} color="#0e76a8" />
            </a>
          </Tooltip>
        )}

      </CardFooter>
    </Card>
  );
};

export default OurTeamCard;
