type Library = {
  library_id: string;
  recommended_version: number;
  description: string;
  updated_at: string;
  library_name: string;
  author: string;
  views: number;
};
type Suggestions = {
  library_id: string;
  description: string;
  library_name: string;
  author: string;
};

type LibraryDetails = {
  created_at: string;
  user_id: string;
  repository_url: string;
  recommended_version: number;
  license_id: number;
  updated_at: string;
  library_id: string;
  description: string;
  library_name: string;
  author: string;
  views: number;
  library_website?: string;
};


type LibrarySideBar = {
  user_id: string;
  repository_url?: string;
  recommended_version: number;
  license_id: number;
  library_id: string;
  library_website?: string;
} | null;


type LibraryHeader = {
  updated_at: string;
  library_id: string;
  description: string;
  library_name: string;
  author: string;
  views: number;
} | null;

