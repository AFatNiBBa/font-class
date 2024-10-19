
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `van-shuttle` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/van-shuttle?s=thin van-shuttle}
 * @preview ![van-shuttle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODAgMzA0QzQzMS4zOTggMzA0IDM5MiAzNDMuMzk4IDM5MiAzOTJDMzkyIDQ0MC42IDQzMS4zOTggNDgwIDQ4MCA0ODBTNTY4IDQ0MC42IDU2OCAzOTJDNTY4IDM0My4zOTggNTI4LjYwMiAzMDQgNDgwIDMwNFpNNDgwIDQ2NEM0NDAuMjk5IDQ2NCA0MDggNDMxLjcwMSA0MDggMzkyUzQ0MC4yOTkgMzIwIDQ4MCAzMjBTNTUyIDM1Mi4yOTkgNTUyIDM5MlM1MTkuNzAxIDQ2NCA0ODAgNDY0Wk0xNjAgMzA0QzExMS4zOTggMzA0IDcyIDM0My4zOTggNzIgMzkyQzcyIDQ0MC42IDExMS4zOTggNDgwIDE2MCA0ODBTMjQ4IDQ0MC42IDI0OCAzOTJDMjQ4IDM0My4zOTggMjA4LjYwMiAzMDQgMTYwIDMwNFpNMTYwIDQ2NEMxMjAuMjk5IDQ2NCA4OCA0MzEuNzAxIDg4IDM5MlMxMjAuMjk5IDMyMCAxNjAgMzIwUzIzMiAzNTIuMjk5IDIzMiAzOTJTMTk5LjcwMSA0NjQgMTYwIDQ2NFpNNjI4Ljg3NSAyMTAuNjI1TDQ5NC4zOTEgNDkuMjY4QzQ4NS4yNzEgMzguMzI2IDQ3MS43NjQgMzIgNDU3LjUyIDMySDQ4QzIxLjYgMzIgMCA1My42IDAgODBWMzM2QzAgMzU5LjI0NCAxNi43NDQgMzc4Ljc2OCAzOC43NjYgMzgzLjEwMkM0My41ODQgMzg0LjA1MSA0OCAzODAuMDc2IDQ4IDM3NS4xNjZDNDggMzcxLjI3NSA0NS4xNjggMzY4LjExMyA0MS4zNjEgMzY3LjMwN0MyNi44OTMgMzY0LjI0MiAxNiAzNTEuMzY5IDE2IDMzNlYyMDhINjA1Ljg1OUw2MTYuNTM5IDIyMC44MTRDNjIxLjM1IDIyNi42MzkgNjI0IDIzMy45MzkgNjI0IDI0MS4zNzVWMzM2QzYyNCAzNTEuMzY5IDYxMy4xMDkgMzY0LjI0MiA1OTguNjM5IDM2Ny4zMDdDNTk0LjgzNCAzNjguMTEzIDU5MiAzNzEuMjc1IDU5MiAzNzUuMTY2QzU5MiAzODAuMDc2IDU5Ni40MTggMzg0LjA1MSA2MDEuMjM0IDM4My4xMDJDNjIzLjI1NiAzNzguNzY4IDY0MCAzNTkuMjQ0IDY0MCAzMzZWMjQxLjM3NUM2NDAgMjMwLjEyNSA2MzYgMjE5LjI1IDYyOC44NzUgMjEwLjYyNVpNMTQ0IDE5MkgxNlY4MEMxNiA2Mi4zMjYgMzAuMzI4IDQ4IDQ4IDQ4SDE0NFYxOTJaTTI4OCAxOTJIMTYwVjQ4SDI4OFYxOTJaTTQzMiAxOTJIMzA0VjQ4SDQzMlYxOTJaTTQ0OCAxOTJWNDhINDU3LjUxOEM0NjcuMDE0IDQ4IDQ3Ni4wMjEgNTIuMjE3IDQ4Mi4xMDIgNTkuNTE0TDU5Mi41MjMgMTkySDQ0OFpNMzYwIDM2OEgyODBDMjc1LjU4MiAzNjggMjcyIDM3MS41ODIgMjcyIDM3NlMyNzUuNTgyIDM4NCAyODAgMzg0SDM2MEMzNjQuNDE4IDM4NCAzNjggMzgwLjQxOCAzNjggMzc2UzM2NC40MTggMzY4IDM2MCAzNjhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function VanShuttle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M480 304C431.398 304 392 343.398 392 392C392 440.6 431.398 480 480 480S568 440.6 568 392C568 343.398 528.602 304 480 304ZM480 464C440.299 464 408 431.701 408 392S440.299 320 480 320S552 352.299 552 392S519.701 464 480 464ZM160 304C111.398 304 72 343.398 72 392C72 440.6 111.398 480 160 480S248 440.6 248 392C248 343.398 208.602 304 160 304ZM160 464C120.299 464 88 431.701 88 392S120.299 320 160 320S232 352.299 232 392S199.701 464 160 464ZM628.875 210.625L494.391 49.268C485.271 38.326 471.764 32 457.52 32H48C21.6 32 0 53.6 0 80V336C0 359.244 16.744 378.768 38.766 383.102C43.584 384.051 48 380.076 48 375.166C48 371.275 45.168 368.113 41.361 367.307C26.893 364.242 16 351.369 16 336V208H605.859L616.539 220.814C621.35 226.639 624 233.939 624 241.375V336C624 351.369 613.109 364.242 598.639 367.307C594.834 368.113 592 371.275 592 375.166C592 380.076 596.418 384.051 601.234 383.102C623.256 378.768 640 359.244 640 336V241.375C640 230.125 636 219.25 628.875 210.625ZM144 192H16V80C16 62.326 30.328 48 48 48H144V192ZM288 192H160V48H288V192ZM432 192H304V48H432V192ZM448 192V48H457.518C467.014 48 476.021 52.217 482.102 59.514L592.523 192H448ZM360 368H280C275.582 368 272 371.582 272 376S275.582 384 280 384H360C364.418 384 368 380.418 368 376S364.418 368 360 368Z" />
        </Icon>
    </>
}