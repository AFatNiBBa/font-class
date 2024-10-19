
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `child` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/child?s=thin child}
 * @preview ![child](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgMTQ0QzI2My43NSAxNDQgMjk2IDExMS43NSAyOTYgNzJTMjYzLjc1IDAgMjI0IDBTMTUyIDMyLjI1IDE1MiA3MlMxODQuMjUgMTQ0IDIyNCAxNDRaTTIyNCAxNkMyNTQuODc5IDE2IDI4MCA0MS4xMjEgMjgwIDcyQzI4MCAxMDIuODc3IDI1NC44NzkgMTI4IDIyNCAxMjhDMTkzLjEyMyAxMjggMTY4IDEwMi44NzcgMTY4IDcyQzE2OCA0MS4xMjEgMTkzLjEyMyAxNiAyMjQgMTZaTTQxNS4wNzkgMTEwLjgyOEM0MDcuMTggMTAxLjA4IDM5NS42MzMgOTYuMDE4IDM4My45ODEgOTYuMDE4QzM3NS4xNDEgOTYuMDE4IDM2Ni4yNDMgOTguOTMgMzU4LjgyOSAxMDQuOTIyTDMwNy42MjUgMTQ2LjM5MUMyODQuNjI5IDE2NS4wMTYgMjU0LjMxNSAxNzQuMzI4IDIyNCAxNzQuMzI4QzE5My42ODggMTc0LjMyOCAxNjMuMzczIDE2NS4wMTYgMTQwLjM3NSAxNDYuMzkxTDg5LjE3MiAxMDQuOTIyQzgxLjc3NCA5OC45MTggNzIuODczIDk2IDY0LjAzMiA5NS45OThDNTIuMzcyIDk1Ljk5OCA0MC44MTMgMTAxLjA3IDMyLjkyMiAxMTAuODI4QzE5LjAxNCAxMjggMjEuNjU1IDE1My4xODggMzguODI5IDE2Ny4wNzhMOTAuMDE2IDIwOC41NDdDMTAxLjc0NSAyMTguMDQzIDExNC42NDcgMjI1LjcwNyAxMjggMjMyLjQ2M1Y0NzAuMTEzQzEyOCA0OTAuOTczIDE0My4xNDMgNTA5LjY5MyAxNjMuODk3IDUxMS43OTFDMTg3LjcxNSA1MTQuMTk5IDIwOCA0OTUuMzU0IDIwOCA0NzJWMzg0QzIwOCAzNzUuMTYyIDIxNS4xNjUgMzY4IDIyNCAzNjhTMjQwIDM3NS4xNjIgMjQwIDM4NFY0NzAuMTEzQzI0MCA0OTAuOTczIDI1NS4xNDMgNTA5LjY5MyAyNzUuODk3IDUxMS43OTFDMjk5LjcxNyA1MTQuMTk5IDMyMCA0OTUuMzU0IDMyMCA0NzJWMjMyLjQ2MUMzMzMuMzUgMjI1LjcwNSAzNDYuMjQ4IDIxOC4wNDMgMzU3Ljk2OSAyMDguNTQ3TDQwOS4xNzIgMTY3LjA3OEM0MjYuMzQ2IDE1My4xODggNDI4Ljk4NyAxMjggNDE1LjA3OSAxMTAuODI4Wk0zOTkuMTA0IDE1NC42NDVMMzQ3Ljg5NyAxOTYuMTE1QzMzOC4yNiAyMDMuOTIyIDMyNy4xIDIxMC45MzYgMzEyLjc3NiAyMTguMTg0TDMwNCAyMjIuNjI1VjQ3MkMzMDQgNDg1LjIzMiAyOTMuMjM1IDQ5NiAyODAgNDk2QzI2Ni43NjggNDk2IDI1NiA0ODUuMjMyIDI1NiA0NzJWMzg0QzI1NiAzNjYuMzI2IDI0MS42NzQgMzUyIDIyNCAzNTJTMTkyIDM2Ni4zMjYgMTkyIDM4NFY0NzJDMTkyIDQ4NS4yMzIgMTgxLjIzNSA0OTYgMTY4IDQ5NkMxNTQuNzY4IDQ5NiAxNDQgNDg1LjIzMiAxNDQgNDcyVjIyMi42MjdMMTM1LjIyNSAyMTguMTg2QzEyMC45MDEgMjEwLjkzOSAxMDkuNzM1IDIwMy45MjQgMTAwLjA4OCAxOTYuMTEzTDQ4Ljg5MSAxNTQuNjM5QzQzLjkxMyAxNTAuNjExIDQwLjgwMyAxNDQuODg1IDQwLjEzNSAxMzguNTE0QzM5LjQ2NSAxMzIuMTM5IDQxLjMyMSAxMjUuODgzIDQ1LjM2NCAxMjAuODg5QzQ5LjkzNCAxMTUuMjM4IDU2LjczNyAxMTEuOTk4IDY0LjAzIDExMS45OThDNjkuNTczIDExMiA3NC43ODIgMTEzLjg0OCA3OS4xMDQgMTE3LjM1NUwxMzAuMzA3IDE1OC44MjRDMTU1LjM5MSAxNzkuMTM5IDE4OC42NjUgMTkwLjMyOCAyMjQgMTkwLjMyOFMyOTIuNjEyIDE3OS4xMzkgMzE3LjY5NiAxNTguODI0TDM2OC44ODUgMTE3LjM2NUMzNzMuMjE1IDExMy44NjcgMzc4LjQzNiAxMTIuMDE4IDM4My45ODEgMTEyLjAxOEMzOTEuMjY4IDExMi4wMTggMzk4LjA3MyAxMTUuMjU2IDQwMi42NDUgMTIwLjg5NkM0MDYuNjgyIDEyNS44ODMgNDA4LjUzOCAxMzIuMTM5IDQwNy44NjggMTM4LjUxNEM0MDcuMiAxNDQuODg1IDQwNC4wODggMTUwLjYxMSAzOTkuMTA0IDE1NC42NDVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Child(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M224 144C263.75 144 296 111.75 296 72S263.75 0 224 0S152 32.25 152 72S184.25 144 224 144ZM224 16C254.879 16 280 41.121 280 72C280 102.877 254.879 128 224 128C193.123 128 168 102.877 168 72C168 41.121 193.123 16 224 16ZM415.079 110.828C407.18 101.08 395.633 96.018 383.981 96.018C375.141 96.018 366.243 98.93 358.829 104.922L307.625 146.391C284.629 165.016 254.315 174.328 224 174.328C193.688 174.328 163.373 165.016 140.375 146.391L89.172 104.922C81.774 98.918 72.873 96 64.032 95.998C52.372 95.998 40.813 101.07 32.922 110.828C19.014 128 21.655 153.188 38.829 167.078L90.016 208.547C101.745 218.043 114.647 225.707 128 232.463V470.113C128 490.973 143.143 509.693 163.897 511.791C187.715 514.199 208 495.354 208 472V384C208 375.162 215.165 368 224 368S240 375.162 240 384V470.113C240 490.973 255.143 509.693 275.897 511.791C299.717 514.199 320 495.354 320 472V232.461C333.35 225.705 346.248 218.043 357.969 208.547L409.172 167.078C426.346 153.188 428.987 128 415.079 110.828ZM399.104 154.645L347.897 196.115C338.26 203.922 327.1 210.936 312.776 218.184L304 222.625V472C304 485.232 293.235 496 280 496C266.768 496 256 485.232 256 472V384C256 366.326 241.674 352 224 352S192 366.326 192 384V472C192 485.232 181.235 496 168 496C154.768 496 144 485.232 144 472V222.627L135.225 218.186C120.901 210.939 109.735 203.924 100.088 196.113L48.891 154.639C43.913 150.611 40.803 144.885 40.135 138.514C39.465 132.139 41.321 125.883 45.364 120.889C49.934 115.238 56.737 111.998 64.03 111.998C69.573 112 74.782 113.848 79.104 117.355L130.307 158.824C155.391 179.139 188.665 190.328 224 190.328S292.612 179.139 317.696 158.824L368.885 117.365C373.215 113.867 378.436 112.018 383.981 112.018C391.268 112.018 398.073 115.256 402.645 120.896C406.682 125.883 408.538 132.139 407.868 138.514C407.2 144.885 404.088 150.611 399.104 154.645Z" />
        </Icon>
    </>
}