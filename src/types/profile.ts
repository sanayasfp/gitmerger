export interface Profile {
  name: string;
  login: string;
  avatarUrl: string;
  bio: string | null;
  location: string | null;
  company: string | null;
  websiteUrl: string | null;
  twitterUsername: string | null;
  followers: number;
  following: number;
  repositories: number;
  contributions: number;
  platform: 'github' | 'gitlab';
}

export interface CombinedProfile {
  github?: Profile;
  gitlab?: Profile;
  displayName: string;
  primaryPlatform: 'github' | 'gitlab';
} 