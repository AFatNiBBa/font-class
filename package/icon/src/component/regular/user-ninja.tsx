
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `user-ninja` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/user-ninja?s=regular user-ninja}
 * @preview ![user-ninja](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMiAxOTJDNTkuMjUgMTkyIDgzLjc1IDE4MC41IDEwMS4yNSAxNjIuMjVDMTE2LjI1IDIxNi4yNSAxNjUuMjUgMjU2IDIyNCAyNTZDMjk0Ljc1IDI1NiAzNTIgMTk4Ljc1IDM1MiAxMjhTMjk0Ljc1IDAgMjI0IDBDMTczLjYyNSAwIDEzMC4zNzUgMjkuMzc1IDEwOS41IDcxLjc1QzkyLjEyNSA0Ny43NSA2NCAzMiAzMiAzMkMzMiA2NS4zNzUgNDkuMTI1IDk0Ljc1IDc1LjEyNSAxMTJDNDkuMTI1IDEyOS4yNSAzMiAxNTguNjI1IDMyIDE5MlpNMTc2IDk2SDI3MkMyODkuNzUgOTYgMzA0IDExMC4yNSAzMDQgMTI4SDE0NEMxNDQgMTEwLjI1IDE1OC4yNSA5NiAxNzYgOTZaTTQ0Ny42ODQgNDY0QzQ1MC40MjYgMzc2LjQ0NSAzODguNDAyIDMwMy4wMDIgMzA1Ljc5NSAyODhMMjI0IDM5Ny4wNTlMMTQyLjIwNSAyODhDNTkuNjA0IDMwMy4wMDIgLTIuNDI4IDM3Ni40NDUgMC4zMTQgNDY0SDBDMCA0OTAuNTEgMjEuNDkgNTEyIDQ4IDUxMkg0MDBDNDI2LjUxIDUxMiA0NDggNDkwLjUxIDQ0OCA0NjRINDQ3LjY4NFpNNDguMzM4IDQ2NEw0OC4yOTEgNDYyLjQ5NkM0Ni42MzUgNDA5LjU4OCA3Ny4xNyAzNjMuMTYgMTIzLjcwMSAzNDMuMzI2TDE4NS42IDQyNS44NTlMMjE0LjIwNyA0NjRINDguMzM4Wk0zOTkuNjcgNDY0SDIzMy43OTNMMjYyLjQgNDI1Ljg1OUwzMjQuMzAxIDM0My4zMjZDMzcwLjgyOCAzNjMuMTYgNDAxLjM2MyA0MDkuNTg2IDM5OS43MDcgNDYyLjQ5NkwzOTkuNjcgNDY0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function UserNinja(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M32 192C59.25 192 83.75 180.5 101.25 162.25C116.25 216.25 165.25 256 224 256C294.75 256 352 198.75 352 128S294.75 0 224 0C173.625 0 130.375 29.375 109.5 71.75C92.125 47.75 64 32 32 32C32 65.375 49.125 94.75 75.125 112C49.125 129.25 32 158.625 32 192ZM176 96H272C289.75 96 304 110.25 304 128H144C144 110.25 158.25 96 176 96ZM447.684 464C450.426 376.445 388.402 303.002 305.795 288L224 397.059L142.205 288C59.604 303.002 -2.428 376.445 0.314 464H0C0 490.51 21.49 512 48 512H400C426.51 512 448 490.51 448 464H447.684ZM48.338 464L48.291 462.496C46.635 409.588 77.17 363.16 123.701 343.326L185.6 425.859L214.207 464H48.338ZM399.67 464H233.793L262.4 425.859L324.301 343.326C370.828 363.16 401.363 409.586 399.707 462.496L399.67 464Z" />
        </Icon>
    </>
}