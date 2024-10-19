
import { Icon } from "../../index";

/**
 * A component that renders the `trash` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash?s=sharp-regular trash}
 * @preview ![trash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTQ3LjIgMEwxNjAgMCAyODggMGwxMi44IDBMMzA4IDEwLjcgMzU0LjIgODBsMTMuNyAwTDQxNiA4MGwzMiAwIDAgNDgtMzUuNiAwTDM4NCA1MTIgNjQgNTEyIDM1LjYgMTI4IDAgMTI4IDAgODBsMzIgMCA0OC4xIDAgMTMuNyAwTDE0MCAxMC43IDE0Ny4yIDB6bTQuNCA4MGwxNDUgMEwyNzUuMiA0OCAxNzIuOCA0OCAxNTEuNSA4MHpNODMuNyAxMjhsMjQuOSAzMzYgMjMwLjggMCAyNC45LTMzNkw4My43IDEyOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Trash: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M147.2 0L160 0 288 0l12.8 0L308 10.7 354.2 80l13.7 0L416 80l32 0 0 48-35.6 0L384 512 64 512 35.6 128 0 128 0 80l32 0 48.1 0 13.7 0L140 10.7 147.2 0zm4.4 80l145 0L275.2 48 172.8 48 151.5 80zM83.7 128l24.9 336 230.8 0 24.9-336L83.7 128z" />
    </Icon>
);

export default Trash;