
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `delicious` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/delicious?s=brands delicious}
 * @preview ![delicious](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDYuNSA2OGMtLjQtMS41LS45LTMtMS40LTQuNS0uOS0yLjUtMi00LjgtMy4zLTcuMS0xLjQtMi40LTMtNC44LTQuNy02LjktMi4xLTIuNS00LjQtNC44LTYuOS02LjgtMS4xLS45LTIuMi0xLjctMy4zLTIuNS0xLjMtLjktMi42LTEuNy00LTIuNC0xLjgtMS0zLjYtMS44LTUuNS0yLjUtMS43LS43LTMuNS0xLjMtNS40LTEuNy0zLjgtMS03LjktMS41LTEyLTEuNUg0OEMyMS41IDMyIDAgNTMuNSAwIDgwdjM1MmMwIDQuMS41IDguMiAxLjUgMTIgMiA3LjcgNS44IDE0LjYgMTEgMjAuMyAxIDEuMSAyLjEgMi4yIDMuMyAzLjMgNS43IDUuMiAxMi42IDkgMjAuMyAxMSAzLjggMSA3LjkgMS41IDEyIDEuNWgzNTJjMjYuNSAwIDQ4LTIxLjUgNDgtNDhWODBjLS4xLTQuMS0uNi04LjItMS42LTEyek00MTYgNDMyYzAgOC44LTcuMiAxNi0xNiAxNkgyMjRWMjU2SDMyVjgwYzAtOC44IDcuMi0xNiAxNi0xNmgxNzZ2MTkyaDE5MnoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Delicious(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M446.5 68c-.4-1.5-.9-3-1.4-4.5-.9-2.5-2-4.8-3.3-7.1-1.4-2.4-3-4.8-4.7-6.9-2.1-2.5-4.4-4.8-6.9-6.8-1.1-.9-2.2-1.7-3.3-2.5-1.3-.9-2.6-1.7-4-2.4-1.8-1-3.6-1.8-5.5-2.5-1.7-.7-3.5-1.3-5.4-1.7-3.8-1-7.9-1.5-12-1.5H48C21.5 32 0 53.5 0 80v352c0 4.1.5 8.2 1.5 12 2 7.7 5.8 14.6 11 20.3 1 1.1 2.1 2.2 3.3 3.3 5.7 5.2 12.6 9 20.3 11 3.8 1 7.9 1.5 12 1.5h352c26.5 0 48-21.5 48-48V80c-.1-4.1-.6-8.2-1.6-12zM416 432c0 8.8-7.2 16-16 16H224V256H32V80c0-8.8 7.2-16 16-16h176v192h192z" />
        </Icon>
    </>
}