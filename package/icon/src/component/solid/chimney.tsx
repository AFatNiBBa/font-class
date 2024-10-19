
import { Icon } from "../../index";

/**
 * A component that renders the `chimney` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chimney?s=solid chimney}
 * @preview ![chimney](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMiAxOTJWMzIwSDEyOFYxOTJIMzJaTTMyIDQ4MEgyODhWMzUySDMyVjQ4MFpNNDE2IDMySDMyQzE0LjI1IDMyIDAgNDYuMjUgMCA2NFYxMjhDMCAxNDUuNzUgMTQuMjUgMTYwIDMyIDE2MEg0MTZDNDMzLjc1IDE2MCA0NDggMTQ1Ljc1IDQ0OCAxMjhWNjRDNDQ4IDQ2LjI1IDQzMy43NSAzMiA0MTYgMzJaTTMyMCA0ODBINDE2VjM1MkgzMjBWNDgwWk0xNjAgMzIwSDQxNlYxOTJIMTYwVjMyMFoiLz48L3N2Zz4=|width=32|height=32)
 */
const Chimney: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 192V320H128V192H32ZM32 480H288V352H32V480ZM416 32H32C14.25 32 0 46.25 0 64V128C0 145.75 14.25 160 32 160H416C433.75 160 448 145.75 448 128V64C448 46.25 433.75 32 416 32ZM320 480H416V352H320V480ZM160 320H416V192H160V320Z" />
    </Icon>
);

export default Chimney;