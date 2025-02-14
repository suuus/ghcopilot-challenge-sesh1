export function findLongestPalindrome(str: string): string {
    if (str.length < 2) return str;

    let start = 0;
    let maxLength = 1;

    function expandAroundCenter(left: number, right: number): void {
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            const currentLength = right - left + 1;
            if (currentLength > maxLength) {
                start = left;
                maxLength = currentLength;
            }
            left--;
            right++;
        }
    }

    for (let i = 0; i < str.length; i++) {
        expandAroundCenter(i, i); // Odd length palindromes
        expandAroundCenter(i, i + 1); // Even length palindromes
    }

    return str.substring(start, start + maxLength);
}