
import { Icon } from "../../index";

/**
 * A component that renders the `battery-half` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-half?s=regular battery-half}
 * @preview ![battery-half](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDY0IDE0NGMxNy43IDAgMzIgMTQuMyAzMiAzMmwwIDE2MGMwIDE3LjctMTQuMyAzMi0zMiAzMkw4MCAzNjhjLTE3LjcgMC0zMi0xNC4zLTMyLTMybDAtMTYwYzAtMTcuNyAxNC4zLTMyIDMyLTMybDM4NCAwek04MCA5NkMzNS44IDk2IDAgMTMxLjggMCAxNzZMMCAzMzZjMCA0NC4yIDM1LjggODAgODAgODBsMzg0IDBjNDQuMiAwIDgwLTM1LjggODAtODBsMC0xNmMxNy43IDAgMzItMTQuMyAzMi0zMmwwLTY0YzAtMTcuNy0xNC4zLTMyLTMyLTMybDAtMTZjMC00NC4yLTM1LjgtODAtODAtODBMODAgOTZ6bTIwOCA5Nkw5NiAxOTJsMCAxMjggMTkyIDAgMC0xMjh6Ii8+PC9zdmc+|width=32|height=32)
 */
const BatteryHalf: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M464 144c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32L80 368c-17.7 0-32-14.3-32-32l0-160c0-17.7 14.3-32 32-32l384 0zM80 96C35.8 96 0 131.8 0 176L0 336c0 44.2 35.8 80 80 80l384 0c44.2 0 80-35.8 80-80l0-16c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l0-16c0-44.2-35.8-80-80-80L80 96zm208 96L96 192l0 128 192 0 0-128z" />
    </Icon>
);

export default BatteryHalf;