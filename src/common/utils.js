import MailOutlineIcon from "@mui/icons-material/MailOutline";

export function getIconByArgument(argument) {
  let iconComponent;
  switch (argument) {
    case "email":
      iconComponent = <MailOutlineIcon />;
      break;
    case "password":
      iconComponent = <MailOutlineIcon />;
      break;
    default:
      // You can set a default icon or return null for an unknown argument
      iconComponent = null;
      break;
  }
  console.log(iconComponent);

  return iconComponent;
}
