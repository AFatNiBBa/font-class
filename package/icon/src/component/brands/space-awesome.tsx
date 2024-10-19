
import { Icon } from "../../index";

/**
 * A component that renders the `space-awesome` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/space-awesome?s=brands space-awesome}
 * @preview ![space-awesome](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNOTYgMjU2SDEyOFY1MTJIMFYzNTJIMzJWMzIwSDY0VjI4OEg5NlYyNTZ6TTUxMiAzNTJWNTEySDM4NFYyNTZINDE2VjI4OEg0NDhWMzIwSDQ4MFYzNTJINTEyek0zMjAgNjRIMzUyVjQ0OEgzMjBWNDE2SDE5MlY0NDhIMTYwVjY0SDE5MlYzMkgyMjRWMEgyODhWMzJIMzIwVjY0ek0yODggMTI4SDIyNFYxOTJIMjg4VjEyOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const SpaceAwesome: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 256H128V512H0V352H32V320H64V288H96V256zM512 352V512H384V256H416V288H448V320H480V352H512zM320 64H352V448H320V416H192V448H160V64H192V32H224V0H288V32H320V64zM288 128H224V192H288V128z" />
    </Icon>
);

export default SpaceAwesome;