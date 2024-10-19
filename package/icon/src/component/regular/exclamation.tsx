
import { Icon } from "../../index";

/**
 * A component that renders the `exclamation` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/exclamation?s=regular exclamation}
 * @preview ![exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02NCAzOTJDNDEuOTA4IDM5MiAyNCA0MDkuOTA4IDI0IDQzMlM0MS45MDggNDcyIDY0IDQ3MlMxMDQgNDU0LjA5MiAxMDQgNDMyUzg2LjA5MiAzOTIgNjQgMzkyWk02NCAzMzZDODEuNjg4IDMzNiA5NiAzMjEuNjcyIDk2IDMwNFY2NEM5NiA0Ni4zMjggODEuNjg4IDMyIDY0IDMyUzMyIDQ2LjMyOCAzMiA2NFYzMDRDMzIgMzIxLjY3MiA0Ni4zMTIgMzM2IDY0IDMzNloiLz48L3N2Zz4=|width=32|height=32)
 */
const Exclamation: typeof Icon = x => (
    <Icon viewBox="0 0 128 512" {...x}>
        <path d="M64 392C41.908 392 24 409.908 24 432S41.908 472 64 472S104 454.092 104 432S86.092 392 64 392ZM64 336C81.688 336 96 321.672 96 304V64C96 46.328 81.688 32 64 32S32 46.328 32 64V304C32 321.672 46.312 336 64 336Z" />
    </Icon>
);

export default Exclamation;