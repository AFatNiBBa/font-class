
import { Icon } from "../../index";

/**
 * A component that renders the `hotel` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hotel?s=regular hotel}
 * @preview ![hotel](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMzYuNzUgMjU2SDI3NS4yNUMyODEuNjI1IDI1NiAyODggMjQ5LjYyNSAyODggMjQzLjI1VjIwNC43NUMyODggMTk4LjM3NSAyODEuNjI1IDE5MiAyNzUuMjUgMTkySDIzNi43NUMyMzAuMzc1IDE5MiAyMjQgMTk4LjM3NSAyMjQgMjA0Ljc1VjI0My4yNUMyMjQgMjQ5LjYyNSAyMzAuMzc1IDI1NiAyMzYuNzUgMjU2Wk0zMzIuNzUgMTYwSDM3MS4yNUMzNzcuNjI1IDE2MCAzODQgMTUzLjYyNSAzODQgMTQ3LjI1VjEwOC43NUMzODQgMTAyLjM3NSAzNzcuNjI1IDk2IDM3MS4yNSA5NkgzMzIuNzVDMzI2LjM3NSA5NiAzMjAgMTAyLjM3NSAzMjAgMTA4Ljc1VjE0Ny4yNUMzMjAgMTUzLjYyNSAzMjYuMzc1IDE2MCAzMzIuNzUgMTYwWk0zMzIuNzUgMjU2SDM3MS4yNUMzNzcuNjI1IDI1NiAzODQgMjQ5LjYyNSAzODQgMjQzLjI1VjIwNC43NUMzODQgMTk4LjM3NSAzNzcuNjI1IDE5MiAzNzEuMjUgMTkySDMzMi43NUMzMjYuMzc1IDE5MiAzMjAgMTk4LjM3NSAzMjAgMjA0Ljc1VjI0My4yNUMzMjAgMjQ5LjYyNSAzMjYuMzc1IDI1NiAzMzIuNzUgMjU2Wk0yMzYuNzUgMTYwSDI3NS4yNUMyODEuNjI1IDE2MCAyODggMTUzLjYyNSAyODggMTQ3LjI1VjEwOC43NUMyODggMTAyLjM3NSAyODEuNjI1IDk2IDI3NS4yNSA5NkgyMzYuNzVDMjMwLjM3NSA5NiAyMjQgMTAyLjM3NSAyMjQgMTA4Ljc1VjE0Ny4yNUMyMjQgMTUzLjYyNSAyMzAuMzc1IDE2MCAyMzYuNzUgMTYwWk00ODggNDY0SDQ4MFY0OEg0ODhDNTAxLjI1NCA0OCA1MTIgMzcuMjU0IDUxMiAyNEM1MTIgMTAuNzQ0IDUwMS4yNTQgMCA0ODggMEgyNEMxMC43NDYgMCAwIDEwLjc0NCAwIDI0QzAgMzcuMjU0IDEwLjc0NiA0OCAyNCA0OEgzMlY0NjRIMjRDMTAuNzQ2IDQ2NCAwIDQ3NC43NDQgMCA0ODhDMCA1MDEuMjU0IDEwLjc0NiA1MTIgMjQgNTEySDQ4OEM1MDEuMjU0IDUxMiA1MTIgNTAxLjI1NCA1MTIgNDg4QzUxMiA0NzQuNzQ0IDUwMS4yNTQgNDY0IDQ4OCA0NjRaTTQzMiA0NjRIMzA0VjM4NEgzMzQuMzczQzM0NC4xNzIgMzg0IDM1Mi4xMDQgMzc1LjE4OSAzNTAuMjMgMzY1LjU3QzM0MS42MzEgMzIxLjM4MSAzMDIuNjk3IDI4OCAyNTYgMjg4UzE3MC4zNjkgMzIxLjM4MSAxNjEuNzcgMzY1LjU3QzE1OS44OTYgMzc1LjE4OSAxNjcuODI4IDM4NCAxNzcuNjI3IDM4NEgyMDhWNDY0SDgwVjQ4SDQzMlY0NjRaTTE0MC43NSAyNTZIMTc5LjI1QzE4NS42MjUgMjU2IDE5MiAyNDkuNjI1IDE5MiAyNDMuMjVWMjA0Ljc1QzE5MiAxOTguMzc1IDE4NS42MjUgMTkyIDE3OS4yNSAxOTJIMTQwLjc1QzEzNC4zNzUgMTkyIDEyOCAxOTguMzc1IDEyOCAyMDQuNzVWMjQzLjI1QzEyOCAyNDkuNjI1IDEzNC4zNzUgMjU2IDE0MC43NSAyNTZaTTE0MC43NSAxNjBIMTc5LjI1QzE4NS42MjUgMTYwIDE5MiAxNTMuNjI1IDE5MiAxNDcuMjVWMTA4Ljc1QzE5MiAxMDIuMzc1IDE4NS42MjUgOTYgMTc5LjI1IDk2SDE0MC43NUMxMzQuMzc1IDk2IDEyOCAxMDIuMzc1IDEyOCAxMDguNzVWMTQ3LjI1QzEyOCAxNTMuNjI1IDEzNC4zNzUgMTYwIDE0MC43NSAxNjBaIi8+PC9zdmc+|width=32|height=32)
 */
const Hotel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M236.75 256H275.25C281.625 256 288 249.625 288 243.25V204.75C288 198.375 281.625 192 275.25 192H236.75C230.375 192 224 198.375 224 204.75V243.25C224 249.625 230.375 256 236.75 256ZM332.75 160H371.25C377.625 160 384 153.625 384 147.25V108.75C384 102.375 377.625 96 371.25 96H332.75C326.375 96 320 102.375 320 108.75V147.25C320 153.625 326.375 160 332.75 160ZM332.75 256H371.25C377.625 256 384 249.625 384 243.25V204.75C384 198.375 377.625 192 371.25 192H332.75C326.375 192 320 198.375 320 204.75V243.25C320 249.625 326.375 256 332.75 256ZM236.75 160H275.25C281.625 160 288 153.625 288 147.25V108.75C288 102.375 281.625 96 275.25 96H236.75C230.375 96 224 102.375 224 108.75V147.25C224 153.625 230.375 160 236.75 160ZM488 464H480V48H488C501.254 48 512 37.254 512 24C512 10.744 501.254 0 488 0H24C10.746 0 0 10.744 0 24C0 37.254 10.746 48 24 48H32V464H24C10.746 464 0 474.744 0 488C0 501.254 10.746 512 24 512H488C501.254 512 512 501.254 512 488C512 474.744 501.254 464 488 464ZM432 464H304V384H334.373C344.172 384 352.104 375.189 350.23 365.57C341.631 321.381 302.697 288 256 288S170.369 321.381 161.77 365.57C159.896 375.189 167.828 384 177.627 384H208V464H80V48H432V464ZM140.75 256H179.25C185.625 256 192 249.625 192 243.25V204.75C192 198.375 185.625 192 179.25 192H140.75C134.375 192 128 198.375 128 204.75V243.25C128 249.625 134.375 256 140.75 256ZM140.75 160H179.25C185.625 160 192 153.625 192 147.25V108.75C192 102.375 185.625 96 179.25 96H140.75C134.375 96 128 102.375 128 108.75V147.25C128 153.625 134.375 160 140.75 160Z" />
    </Icon>
);

export default Hotel;