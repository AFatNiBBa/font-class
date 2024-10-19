
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `sliders-up` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sliders-up?s=regular sliders-up}
 * @preview ![sliders-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik03MiAxOTJWNDg4QzcyIDUwMS4yNTUgODIuNzQ1IDUxMiA5NiA1MTJIOTZDMTA5LjI1NSA1MTIgMTIwIDUwMS4yNTUgMTIwIDQ4OFYxOTJINzJaTTIzMiAyNFYzNjhIMjE2QzIwMi43NSAzNjggMTkyIDM3OC43NSAxOTIgMzkyUzIwMi43NSA0MTYgMjE2IDQxNkgyOTZDMzA5LjI1IDQxNiAzMjAgNDA1LjI1IDMyMCAzOTJTMzA5LjI1IDM2OCAyOTYgMzY4SDI4MFYyNEMyODAgMTAuNzUgMjY5LjI1IDAgMjU2IDBTMjMyIDEwLjc1IDIzMiAyNFpNMzkyIDI0VjI0MEgzNzZDMzYyLjc1IDI0MCAzNTIgMjUwLjc1IDM1MiAyNjRTMzYyLjc1IDI4OCAzNzYgMjg4SDQ1NkM0NjkuMjUgMjg4IDQ4MCAyNzcuMjUgNDgwIDI2NFM0NjkuMjUgMjQwIDQ1NiAyNDBINDQwVjI0QzQ0MCAxMC43NSA0MjkuMjUgMCA0MTYgMFMzOTIgMTAuNzUgMzkyIDI0Wk0yMzIgNDQ4VjQ4OEMyMzIgNTAxLjI1NSAyNDIuNzQ1IDUxMiAyNTYgNTEySDI1NkMyNjkuMjU1IDUxMiAyODAgNTAxLjI1NSAyODAgNDg4VjQ0OEgyMzJaTTQ0MCA0ODhWMzIwSDM5MlY0ODhDMzkyIDUwMS4yNTUgNDAyLjc0NSA1MTIgNDE2IDUxMkg0MTZDNDI5LjI1NSA1MTIgNDQwIDUwMS4yNTUgNDQwIDQ4OFpNMTYwIDEzNkMxNjAgMTIyLjc1IDE0OS4yNSAxMTIgMTM2IDExMkgxMjBWMjRDMTIwIDEwLjc1IDEwOS4yNSAwIDk2IDBTNzIgMTAuNzUgNzIgMjRWMTEySDU2QzQyLjc1IDExMiAzMiAxMjIuNzUgMzIgMTM2UzQyLjc1IDE2MCA1NiAxNjBIMTM2QzE0OS4yNSAxNjAgMTYwIDE0OS4yNSAxNjAgMTM2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SlidersUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M72 192V488C72 501.255 82.745 512 96 512H96C109.255 512 120 501.255 120 488V192H72ZM232 24V368H216C202.75 368 192 378.75 192 392S202.75 416 216 416H296C309.25 416 320 405.25 320 392S309.25 368 296 368H280V24C280 10.75 269.25 0 256 0S232 10.75 232 24ZM392 24V240H376C362.75 240 352 250.75 352 264S362.75 288 376 288H456C469.25 288 480 277.25 480 264S469.25 240 456 240H440V24C440 10.75 429.25 0 416 0S392 10.75 392 24ZM232 448V488C232 501.255 242.745 512 256 512H256C269.255 512 280 501.255 280 488V448H232ZM440 488V320H392V488C392 501.255 402.745 512 416 512H416C429.255 512 440 501.255 440 488ZM160 136C160 122.75 149.25 112 136 112H120V24C120 10.75 109.25 0 96 0S72 10.75 72 24V112H56C42.75 112 32 122.75 32 136S42.75 160 56 160H136C149.25 160 160 149.25 160 136Z" />
        </Icon>
    </>
}