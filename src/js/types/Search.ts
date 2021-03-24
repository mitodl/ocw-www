export interface SearchResult {
  runs?: CourseRun[]
  content_type: string
  object_type: string
  short_url?: string
  run_slug: string
  id: string
  title: string
  image_src?: string
  platform?: string
  topics?: string[]
  department: string
  audience: string
  certification: string
  content_title: string
  run_title?: string
  course_id?: string
  short_description?: string
  coursenum?: string
  course_feature_tags?: string[]
  url: string
}

export interface CourseRun {
  published: boolean
  slug: string
  best_start_date: string
  instructors: string[]
  level: string
}

export interface LeanringResource {
  url: string
}
