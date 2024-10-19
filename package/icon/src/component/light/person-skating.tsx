
import { Icon } from "../../index";

/**
 * A component that renders the `person-skating` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/person-skating?s=light person-skating}
 * @preview ![person-skating](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODggMzYyLjUxNlY0NDhDMjg4IDQ1Ni44NDQgMjk1LjE1NiA0NjQgMzA0IDQ2NFMzMjAgNDU2Ljg0NCAzMjAgNDQ4VjM2Mi41MTZDMzIwIDM0MS4xNDEgMzExLjY4NyAzMjEuMDQ3IDI5Ni41NjIgMzA1LjkzOEwyNDIuNDM3IDI1MS44MjhDMjM1Ljg3NSAyNDUuMjY2IDIzMi41IDIzNi4xODggMjMzLjE1NiAyMjYuOTIyQzIzMy44MTIgMjE3LjY3MiAyMzguNDM3IDIwOS4xNzIgMjQ1Ljg3NSAyMDMuNTk0TDMyOS41OTQgMTQwLjc5N0MzMzUuMTI1IDEzNi42NzIgMzM3LjM0NCAxMjkuNDY5IDMzNS4xODcgMTIyLjkzOEMzMzMgMTE2LjQwNiAzMjYuODc1IDExMiAzMjAgMTEySDExMkMxMDMuMTU2IDExMiA5NiAxMTkuMTU2IDk2IDEyOFMxMDMuMTU2IDE0NCAxMTIgMTQ0SDI3MkwyMjYuNjg3IDE3OEMyMTEuODQ0IDE4OS4xMjUgMjAyLjU2MiAyMDYuMTI1IDIwMS4yMTkgMjI0LjY1NkMxOTkuOTA2IDI0My4xNzIgMjA2LjY4NyAyNjEuMzI4IDIxOS44MTIgMjc0LjQ1M0wyNzMuOTM3IDMyOC41NjNDMjgzIDMzNy42NDEgMjg4IDM0OS42ODggMjg4IDM2Mi41MTZaTTE2NC42ODcgMjkyLjY4OEw4NC42ODcgMzcyLjY4OEM3OC40MzcgMzc4LjkzOCA3OC40MzcgMzg5LjA2MyA4NC42ODcgMzk1LjMxMkM4Ny44MTIgMzk4LjQzOCA5MS45MDYgNDAwIDk2IDQwMFMxMDQuMTg3IDM5OC40MzggMTA3LjMxMiAzOTUuMzEyTDE4Ny4zMTIgMzE1LjMxMkMxOTMuNTYyIDMwOS4wNjIgMTkzLjU2MiAyOTguOTM3IDE4Ny4zMTIgMjkyLjY4OFMxNzAuOTM3IDI4Ni40MzggMTY0LjY4NyAyOTIuNjg4Wk0zODQgNDMyQzM3NS4xNTYgNDMyIDM2OCA0MzkuMTU2IDM2OCA0NDhDMzY4IDQ2NS42NDEgMzUzLjY1NiA0ODAgMzM2IDQ4MEgyNTZDMjQ3LjE1NiA0ODAgMjQwIDQ4Ny4xNTYgMjQwIDQ5NlMyNDcuMTU2IDUxMiAyNTYgNTEySDMzNkMzNzEuMjgxIDUxMiA0MDAgNDgzLjI5NyA0MDAgNDQ4QzQwMCA0MzkuMTU2IDM5Mi44NDQgNDMyIDM4NCA0MzJaTTExNi42ODcgNDM2LjY4OEMxMDUuMzEyIDQ0OC4wNjMgODYuNjg3IDQ0OC4wNjMgNzUuMzEyIDQzNi42ODhMMjcuMzEyIDM4OC42ODhDMjEuMDYyIDM4Mi40MzggMTAuOTM3IDM4Mi40MzggNC42ODcgMzg4LjY4OFMtMS41NjMgNDA1LjA2MyA0LjY4NyA0MTEuMzEyTDUyLjY4NyA0NTkuMzEyQzY0LjYyNSA0NzEuMjUgODAuMzEyIDQ3Ny4yMTkgOTYgNDc3LjIxOVMxMjcuMzc1IDQ3MS4yNSAxMzkuMzEyIDQ1OS4zMTJDMTQ1LjU2MiA0NTMuMDc4IDE0NS41NjIgNDQyLjkzNyAxMzkuMzEyIDQzNi42ODhTMTIyLjkzNyA0MzAuNDM4IDExNi42ODcgNDM2LjY4OFpNMzkyIDBDMzYxLjEyNSAwIDMzNiAyNS4xMjUgMzM2IDU2UzM2MS4xMjUgMTEyIDM5MiAxMTJTNDQ4IDg2Ljg3NSA0NDggNTZTNDIyLjg3NSAwIDM5MiAwWk0zOTIgODBDMzc4Ljc4MSA4MCAzNjggNjkuMjM0IDM2OCA1NlMzNzguNzgxIDMyIDM5MiAzMlM0MTYgNDIuNzY2IDQxNiA1NlM0MDUuMjE5IDgwIDM5MiA4MFoiLz48L3N2Zz4=|width=32|height=32)
 */
const PersonSkating: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M288 362.516V448C288 456.844 295.156 464 304 464S320 456.844 320 448V362.516C320 341.141 311.687 321.047 296.562 305.938L242.437 251.828C235.875 245.266 232.5 236.188 233.156 226.922C233.812 217.672 238.437 209.172 245.875 203.594L329.594 140.797C335.125 136.672 337.344 129.469 335.187 122.938C333 116.406 326.875 112 320 112H112C103.156 112 96 119.156 96 128S103.156 144 112 144H272L226.687 178C211.844 189.125 202.562 206.125 201.219 224.656C199.906 243.172 206.687 261.328 219.812 274.453L273.937 328.563C283 337.641 288 349.688 288 362.516ZM164.687 292.688L84.687 372.688C78.437 378.938 78.437 389.063 84.687 395.312C87.812 398.438 91.906 400 96 400S104.187 398.438 107.312 395.312L187.312 315.312C193.562 309.062 193.562 298.937 187.312 292.688S170.937 286.438 164.687 292.688ZM384 432C375.156 432 368 439.156 368 448C368 465.641 353.656 480 336 480H256C247.156 480 240 487.156 240 496S247.156 512 256 512H336C371.281 512 400 483.297 400 448C400 439.156 392.844 432 384 432ZM116.687 436.688C105.312 448.063 86.687 448.063 75.312 436.688L27.312 388.688C21.062 382.438 10.937 382.438 4.687 388.688S-1.563 405.063 4.687 411.312L52.687 459.312C64.625 471.25 80.312 477.219 96 477.219S127.375 471.25 139.312 459.312C145.562 453.078 145.562 442.937 139.312 436.688S122.937 430.438 116.687 436.688ZM392 0C361.125 0 336 25.125 336 56S361.125 112 392 112S448 86.875 448 56S422.875 0 392 0ZM392 80C378.781 80 368 69.234 368 56S378.781 32 392 32S416 42.766 416 56S405.219 80 392 80Z" />
    </Icon>
);

export default PersonSkating;