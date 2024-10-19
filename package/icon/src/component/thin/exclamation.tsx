
import { Icon } from "../../index";

/**
 * A component that renders the `exclamation` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/exclamation?s=thin exclamation}
 * @preview ![exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02NCAzODRDNjguNDA2IDM4NCA3MiAzODAuNDIyIDcyIDM3NlY0MEM3MiAzNS41NzggNjguNDA2IDMyIDY0IDMyUzU2IDM1LjU3OCA1NiA0MFYzNzZDNTYgMzgwLjQyMiA1OS41OTQgMzg0IDY0IDM4NFpNNjQgNDMyQzU1LjE2NCA0MzIgNDggNDM5LjE2NCA0OCA0NDhTNTUuMTY0IDQ2NCA2NCA0NjRTODAgNDU2LjgzNiA4MCA0NDhTNzIuODM2IDQzMiA2NCA0MzJaIi8+PC9zdmc+|width=32|height=32)
 */
const Exclamation: typeof Icon = x => (
    <Icon viewBox="0 0 128 512" {...x}>
        <path d="M64 384C68.406 384 72 380.422 72 376V40C72 35.578 68.406 32 64 32S56 35.578 56 40V376C56 380.422 59.594 384 64 384ZM64 432C55.164 432 48 439.164 48 448S55.164 464 64 464S80 456.836 80 448S72.836 432 64 432Z" />
    </Icon>
);

export default Exclamation;