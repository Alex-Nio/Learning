export function Posts({ postsData }) {
  return (
    <div className="bg-white">
      <div className="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {postsData.map((post) => (
            <a key={post.id} href={post.href} className="group">
              <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={post.imageSrc}
                  alt={post.imageAlt}
                  className="object-cover object-center w-full h-full group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{post.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {post.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
