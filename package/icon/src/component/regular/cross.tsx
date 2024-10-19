
import { Icon } from "../../index";

/**
 * A component that renders the `cross` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cross?s=regular cross}
 * @preview ![cross](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMzYuMDAyIDExMkgyNzIuMDA0VjQ4QzI3Mi4wMDQgMjEuNDkyIDI1MC41MTQgMCAyMjQuMDA0IDBIMTYwLjAwNEMxMzMuNDk0IDAgMTEyLjAwNCAyMS40OTIgMTEyLjAwNCA0OFYxMTJINDhDMjEuNDkgMTEyIDAgMTMzLjQ5MiAwIDE2MFYyMjRDMCAyNTAuNTA4IDIxLjQ5IDI3MiA0OCAyNzJIMTEyLjAwNFY0NjRDMTEyLjAwNCA0OTAuNTA4IDEzMy40OTQgNTEyIDE2MC4wMDQgNTEySDIyNC4wMDRDMjUwLjUxNCA1MTIgMjcyLjAwNCA0OTAuNTA4IDI3Mi4wMDQgNDY0VjI3MkgzMzYuMDAyQzM2Mi41MTIgMjcyIDM4NC4wMDIgMjUwLjUwOCAzODQuMDAyIDIyNFYxNjBDMzg0LjAwMiAxMzMuNDkyIDM2Mi41MTIgMTEyIDMzNi4wMDIgMTEyWk0zMzYuMDAyIDIyNEgyMjQuMDA0VjQ2NEgxNjAuMDA0VjIyNEg0OFYxNjBIMTYwLjAwNFY0OEgyMjQuMDA0VjE2MEgzMzYuMDAyVjIyNFoiLz48L3N2Zz4=|width=32|height=32)
 */
const Cross: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M336.002 112H272.004V48C272.004 21.492 250.514 0 224.004 0H160.004C133.494 0 112.004 21.492 112.004 48V112H48C21.49 112 0 133.492 0 160V224C0 250.508 21.49 272 48 272H112.004V464C112.004 490.508 133.494 512 160.004 512H224.004C250.514 512 272.004 490.508 272.004 464V272H336.002C362.512 272 384.002 250.508 384.002 224V160C384.002 133.492 362.512 112 336.002 112ZM336.002 224H224.004V464H160.004V224H48V160H160.004V48H224.004V160H336.002V224Z" />
    </Icon>
);

export default Cross;