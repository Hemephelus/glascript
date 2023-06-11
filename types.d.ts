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
  recommended_version: number;
  description: string;
  updated_at: string;
  library_name: string;
  author: string;
  views: number;
  library_website?: string;
};

// [
//   {
//     library_id: `1YJkHduBJjk7eDbwWCp20YGSjHZsELb4F_q2Fmxs7zgZclZULI84Yjm0f`,
//     description: `ArrangeStackingOrder is a GAS library for arranging the stacking order of page elements on Google Slides using Google Apps Script (GAS).`,
//     recommended_version: 1,
//     updated_at: '2023-05-26T16:21:59.12+00:00',
//     library_name: 'ArrangeStackingOrder',
//     author: 'tanaike',
//     views: 0
//   },
//   {
//     library_id: 'MOHgh9lncF2UxY-NXF58v3eVJ5jnXUK_T'
// ,
//     description: 'Array manipulation',
//     recommended_version: 1,
//     updated_at: '2023-05-26T16:21:59.12+00:00',
//     library_name: 'ArrayLib',
//     author: 'unknown',
//     views: 0
//   }
// ]
