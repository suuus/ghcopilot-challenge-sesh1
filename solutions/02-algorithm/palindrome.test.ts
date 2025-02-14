import { findLongestPalindrome } from './palindrome';

describe('findLongestPalindrome', () => {
    test('should find simple palindromes', () => {
        expect(findLongestPalindrome('racecar')).toBe('racecar');
        expect(findLongestPalindrome('babad')).toMatch(/bab|aba/);
    });

    test('should handle edge cases', () => {
        expect(findLongestPalindrome('')).toBe('');
        expect(findLongestPalindrome('a')).toBe('a');
        expect(findLongestPalindrome('ab')).toBe('a'); // or 'b' is fine too
    });

    test('should find even-length palindromes', () => {
        expect(findLongestPalindrome('abba')).toBe('abba');
        expect(findLongestPalindrome('hello')).toBe('ll');
    });

    test('should handle complex cases', () => {
        expect(findLongestPalindrome('civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth')).toBe('ranynar');
    });
});