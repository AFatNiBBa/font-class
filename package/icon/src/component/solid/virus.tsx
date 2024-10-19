
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `virus` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/virus?s=solid virus}
 * @preview ![virus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTUuNTU1IDIyNy41NTVINDk0LjAwOEM0NDMuMzI2IDIyNy41NTUgNDE3Ljk0MyAxNjYuMjc3IDQ1My43ODEgMTMwLjQzOUw0NjkuMDI3IDExNS4xOTNDNDgwLjEzOSAxMDQuMDgyIDQ4MC4xMzkgODYuMDgyIDQ2OS4wMjcgNzQuOTczQzQ1Ny45MTYgNjMuODYxIDQzOS45MTYgNjMuODYxIDQyOC44MDUgNzQuOTczTDQxMy41NjEgOTAuMjE3QzM3Ny43MjMgMTI2LjA1NSAzMTYuNDQ1IDEwMC42NzQgMzE2LjQ0NSA0OS45OVYyOC40NDNDMzE2LjQ0NSAxMi43MjMgMzAzLjcyMyAwIDI4OCAwUzI1OS41NTUgMTIuNzIzIDI1OS41NTUgMjguNDQzVjQ5Ljk5QzI1OS41NTUgMTAwLjY3NCAxOTguMjc3IDEyNi4wNTUgMTYyLjQzOSA5MC4yMTdMMTQ3LjE5NSA3NC45NzNDMTM2LjA4NCA2My44NjEgMTE4LjA4NCA2My44NjEgMTA2Ljk3MyA3NC45NzNDOTUuODYxIDg2LjA4MiA5NS44NjEgMTA0LjA4MiAxMDYuOTczIDExNS4xOTNMMTIyLjIxOSAxMzAuNDM5QzE1OC4wNTcgMTY2LjI3NyAxMzIuNjc0IDIyNy41NTUgODEuOTkyIDIyNy41NTVINjAuNDQ1QzQ0LjcyMyAyMjcuNTU1IDMyIDI0MC4yNzcgMzIgMjU2UzQ0LjcyMyAyODQuNDQzIDYwLjQ0NSAyODQuNDQzSDgxLjk5MkMxMzIuNjc0IDI4NC40NDMgMTU4LjA1NyAzNDUuNzIxIDEyMi4yMTkgMzgxLjU1OUwxMDYuOTczIDM5Ni44MDVDOTUuODYxIDQwNy45MTYgOTUuODYxIDQyNS45MTYgMTA2Ljk3MyA0MzcuMDI3QzExMi41MjcgNDQyLjU4MiAxMTkuODA1IDQ0NS4zNjEgMTI3LjA4NCA0NDUuMzYxQzEzNC4zNjEgNDQ1LjM2MSAxNDEuNjM5IDQ0Mi41ODIgMTQ3LjE5NSA0MzcuMDI3TDE2Mi40MzkgNDIxLjc4MUMxOTguMjc3IDM4NS45NDMgMjU5LjU1NSA0MTEuMzI2IDI1OS41NTUgNDYyLjAwOFY0ODMuNTU1QzI1OS41NTUgNDk5LjI3NyAyNzIuMjc3IDUxMiAyODggNTEyUzMxNi40NDUgNDk5LjI3NyAzMTYuNDQ1IDQ4My41NTVWNDYyLjAwOEMzMTYuNDQ1IDQxMS4zMjYgMzc3LjcyMyAzODUuOTQzIDQxMy41NjEgNDIxLjc4MUw0MjguODA1IDQzNy4wMjdDNDM0LjM2MSA0NDIuNTgyIDQ0MS42MzkgNDQ1LjM2MSA0NDguOTE2IDQ0NS4zNjFDNDU2LjE5NSA0NDUuMzYxIDQ2My40NzMgNDQyLjU4MiA0NjkuMDI3IDQzNy4wMjdDNDgwLjEzOSA0MjUuOTE2IDQ4MC4xMzkgNDA3LjkxNiA0NjkuMDI3IDM5Ni44MDVMNDUzLjc4MSAzODEuNTU5QzQxNy45NDMgMzQ1LjcyMSA0NDMuMzI2IDI4NC40NDMgNDk0LjAwOCAyODQuNDQzSDUxNS41NTVDNTMxLjI3NyAyODQuNDQzIDU0NCAyNzEuNzIzIDU0NCAyNTZTNTMxLjI3NyAyMjcuNTU1IDUxNS41NTUgMjI3LjU1NVpNMjU2IDI3MkMyMjkuNDkgMjcyIDIwOCAyNTAuNTEgMjA4IDIyNFMyMjkuNDkgMTc2IDI1NiAxNzZTMzA0IDE5Ny40OSAzMDQgMjI0UzI4Mi41MSAyNzIgMjU2IDI3MlpNMzM2IDMyOEMzMjIuNzQ2IDMyOCAzMTIgMzE3LjI1NCAzMTIgMzA0QzMxMiAyOTAuNzQ0IDMyMi43NDYgMjgwIDMzNiAyODBTMzYwIDI5MC43NDQgMzYwIDMwNEMzNjAgMzE3LjI1NCAzNDkuMjU0IDMyOCAzMzYgMzI4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Virus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M515.555 227.555H494.008C443.326 227.555 417.943 166.277 453.781 130.439L469.027 115.193C480.139 104.082 480.139 86.082 469.027 74.973C457.916 63.861 439.916 63.861 428.805 74.973L413.561 90.217C377.723 126.055 316.445 100.674 316.445 49.99V28.443C316.445 12.723 303.723 0 288 0S259.555 12.723 259.555 28.443V49.99C259.555 100.674 198.277 126.055 162.439 90.217L147.195 74.973C136.084 63.861 118.084 63.861 106.973 74.973C95.861 86.082 95.861 104.082 106.973 115.193L122.219 130.439C158.057 166.277 132.674 227.555 81.992 227.555H60.445C44.723 227.555 32 240.277 32 256S44.723 284.443 60.445 284.443H81.992C132.674 284.443 158.057 345.721 122.219 381.559L106.973 396.805C95.861 407.916 95.861 425.916 106.973 437.027C112.527 442.582 119.805 445.361 127.084 445.361C134.361 445.361 141.639 442.582 147.195 437.027L162.439 421.781C198.277 385.943 259.555 411.326 259.555 462.008V483.555C259.555 499.277 272.277 512 288 512S316.445 499.277 316.445 483.555V462.008C316.445 411.326 377.723 385.943 413.561 421.781L428.805 437.027C434.361 442.582 441.639 445.361 448.916 445.361C456.195 445.361 463.473 442.582 469.027 437.027C480.139 425.916 480.139 407.916 469.027 396.805L453.781 381.559C417.943 345.721 443.326 284.443 494.008 284.443H515.555C531.277 284.443 544 271.723 544 256S531.277 227.555 515.555 227.555ZM256 272C229.49 272 208 250.51 208 224S229.49 176 256 176S304 197.49 304 224S282.51 272 256 272ZM336 328C322.746 328 312 317.254 312 304C312 290.744 322.746 280 336 280S360 290.744 360 304C360 317.254 349.254 328 336 328Z" />
        </Icon>
    </>
}