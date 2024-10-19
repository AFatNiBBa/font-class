
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `laravel` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/laravel?s=brands laravel}
 * @preview ![laravel](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDQuNCwxMTUuODNhNS43Miw1LjcyLDAsMCwwLS4yOC0uNjgsOC41Miw4LjUyLDAsMCwwLS41My0xLjI1LDYsNiwwLDAsMC0uNTQtLjcxLDkuMzYsOS4zNiwwLDAsMC0uNzItLjk0Yy0uMjMtLjIyLS41Mi0uNC0uNzctLjZhOC44NCw4Ljg0LDAsMCwwLS45LS42OEw0MDQuNCw1NS41NWE4LDgsMCwwLDAtOCwwTDMwMC4xMiwxMTFoMGE4LjA3LDguMDcsMCwwLDAtLjg4LjY5LDcuNjgsNy42OCwwLDAsMC0uNzguNiw4LjIzLDguMjMsMCwwLDAtLjcyLjkzYy0uMTcuMjQtLjM5LjQ1LS41NC43MWE5LjcsOS43LDAsMCwwLS41MiwxLjI1Yy0uMDguMjMtLjIxLjQ0LS4yOC42OGE4LjA4LDguMDgsMCwwLDAtLjI4LDIuMDhWMjIzLjE4bC04MC4yMiw0Ni4xOVY2My40NGE3LjgsNy44LDAsMCwwLS4yOC0yLjA5Yy0uMDYtLjI0LS4yLS40NS0uMjgtLjY4YTguMzUsOC4zNSwwLDAsMC0uNTItMS4yNGMtLjE0LS4yNi0uMzctLjQ3LS41NC0uNzJhOS4zNiw5LjM2LDAsMCwwLS43Mi0uOTQsOS40Niw5LjQ2LDAsMCwwLS43OC0uNiw5LjgsOS44LDAsMCwwLS44OC0uNjhoMEwxMTUuNjEsMS4wN2E4LDgsMCwwLDAtOCwwTDExLjM0LDU2LjQ5aDBhNi41Miw2LjUyLDAsMCwwLS44OC42OSw3LjgxLDcuODEsMCwwLDAtLjc5LjYsOC4xNSw4LjE1LDAsMCwwLS43MS45M2MtLjE4LjI1LS40LjQ2LS41NS43MmE3Ljg4LDcuODgsMCwwLDAtLjUxLDEuMjQsNi40Niw2LjQ2LDAsMCwwLS4yOS42Nyw4LjE4LDguMTgsMCwwLDAtLjI4LDIuMXYzMjkuN2E4LDgsMCwwLDAsNCw2Ljk1bDE5Mi41LDExMC44NGE4LjgzLDguODMsMCwwLDAsMS4zMy41NGMuMjEuMDguNDEuMi42My4yNmE3LjkyLDcuOTIsMCwwLDAsNC4xLDBjLjItLjA1LjM3LS4xNi41NS0uMjJhOC42LDguNiwwLDAsMCwxLjQtLjU4TDQwNC40LDQwMC4wOWE4LDgsMCwwLDAsNC02Ljk1VjI4Ny44OGw5Mi4yNC01My4xMWE4LDgsMCwwLDAsNC03VjExNy45MkE4LjYzLDguNjMsMCwwLDAsNTA0LjQsMTE1LjgzWk0xMTEuNiwxNy4yOGgwbDgwLjE5LDQ2LjE1LTgwLjIsNDYuMThMMzEuNDEsNjMuNDRabTg4LjI1LDYwVjI3OC42bC00Ni41MywyNi43OS0zMy42OSwxOS40VjEyMy41bDQ2LjUzLTI2Ljc5Wm0wLDQxMi43OEwyMy4zNywzODguNVY3Ny4zMkw1Ny4wNiw5Ni43bDQ2LjUyLDI2LjhWMzM4LjY4YTYuOTQsNi45NCwwLDAsMCwuMTIuOSw4LDgsMCwwLDAsLjE2LDEuMThoMGE1LjkyLDUuOTIsMCwwLDAsLjM4LjksNi4zOCw2LjM4LDAsMCwwLC40MiwxdjBhOC41NCw4LjU0LDAsMCwwLC42Ljc4LDcuNjIsNy42MiwwLDAsMCwuNjYuODRsMCwwYy4yMy4yMi41Mi4zOC43Ny41OGE4LjkzLDguOTMsMCwwLDAsLjg2LjY2bDAsMCwwLDAsOTIuMTksNTIuMThabTgtMTA2LjE3LTgwLjA2LTQ1LjMyLDg0LjA5LTQ4LjQxLDkyLjI2LTUzLjExLDgwLjEzLDQ2LjEzLTU4LjgsMzMuNTZabTE4NC41Miw0LjU3TDIxNS44OCw0OTAuMTFWMzk3LjhMMzQ2LjYsMzIzLjJsNDUuNzctMjYuMTVabTAtMTE5LjEzTDM1OC42OCwyNTBsLTQ2LjUzLTI2Ljc5VjEzMS43OWwzMy42OSwxOS40TDM5Mi4zNywxNzhabTgtMTA1LjI4LTgwLjItNDYuMTcsODAuMi00Ni4xNiw4MC4xOCw0Ni4xNVptOCwxMDUuMjhWMTc4TDQ1NSwxNTEuMTlsMzMuNjgtMTkuNHY5MS4zOWgwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Laravel(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M504.4,115.83a5.72,5.72,0,0,0-.28-.68,8.52,8.52,0,0,0-.53-1.25,6,6,0,0,0-.54-.71,9.36,9.36,0,0,0-.72-.94c-.23-.22-.52-.4-.77-.6a8.84,8.84,0,0,0-.9-.68L404.4,55.55a8,8,0,0,0-8,0L300.12,111h0a8.07,8.07,0,0,0-.88.69,7.68,7.68,0,0,0-.78.6,8.23,8.23,0,0,0-.72.93c-.17.24-.39.45-.54.71a9.7,9.7,0,0,0-.52,1.25c-.08.23-.21.44-.28.68a8.08,8.08,0,0,0-.28,2.08V223.18l-80.22,46.19V63.44a7.8,7.8,0,0,0-.28-2.09c-.06-.24-.2-.45-.28-.68a8.35,8.35,0,0,0-.52-1.24c-.14-.26-.37-.47-.54-.72a9.36,9.36,0,0,0-.72-.94,9.46,9.46,0,0,0-.78-.6,9.8,9.8,0,0,0-.88-.68h0L115.61,1.07a8,8,0,0,0-8,0L11.34,56.49h0a6.52,6.52,0,0,0-.88.69,7.81,7.81,0,0,0-.79.6,8.15,8.15,0,0,0-.71.93c-.18.25-.4.46-.55.72a7.88,7.88,0,0,0-.51,1.24,6.46,6.46,0,0,0-.29.67,8.18,8.18,0,0,0-.28,2.1v329.7a8,8,0,0,0,4,6.95l192.5,110.84a8.83,8.83,0,0,0,1.33.54c.21.08.41.2.63.26a7.92,7.92,0,0,0,4.1,0c.2-.05.37-.16.55-.22a8.6,8.6,0,0,0,1.4-.58L404.4,400.09a8,8,0,0,0,4-6.95V287.88l92.24-53.11a8,8,0,0,0,4-7V117.92A8.63,8.63,0,0,0,504.4,115.83ZM111.6,17.28h0l80.19,46.15-80.2,46.18L31.41,63.44Zm88.25,60V278.6l-46.53,26.79-33.69,19.4V123.5l46.53-26.79Zm0,412.78L23.37,388.5V77.32L57.06,96.7l46.52,26.8V338.68a6.94,6.94,0,0,0,.12.9,8,8,0,0,0,.16,1.18h0a5.92,5.92,0,0,0,.38.9,6.38,6.38,0,0,0,.42,1v0a8.54,8.54,0,0,0,.6.78,7.62,7.62,0,0,0,.66.84l0,0c.23.22.52.38.77.58a8.93,8.93,0,0,0,.86.66l0,0,0,0,92.19,52.18Zm8-106.17-80.06-45.32,84.09-48.41,92.26-53.11,80.13,46.13-58.8,33.56Zm184.52,4.57L215.88,490.11V397.8L346.6,323.2l45.77-26.15Zm0-119.13L358.68,250l-46.53-26.79V131.79l33.69,19.4L392.37,178Zm8-105.28-80.2-46.17,80.2-46.16,80.18,46.15Zm8,105.28V178L455,151.19l33.68-19.4v91.39h0Z" />
        </Icon>
    </>
}