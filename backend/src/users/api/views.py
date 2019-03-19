from rest_framework import permissions
from django.shortcuts import get_object_or_404


from rest_framework.generics import (
    RetrieveAPIView,
    UpdateAPIView
)
from users.models import Profile
from .serializers import (
    ProfileSerializer,
    ProfileUpdateSerializer
)

from rest_framework.exceptions import ParseError
from rest_framework.parsers import FileUploadParser


# Use to retrieve based on multiple filters
# class MultipleFieldLookupMixin(object):
#     """
#     Apply this mixin to any view or viewset to get multiple field filtering
#     based on a `lookup_fields` attribute, instead of the default single field filtering.
#     """
#     def get_object(self):
#         queryset = self.get_queryset()             # Get the base queryset
#         queryset = self.filter_queryset(queryset)  # Apply any filter backends
#         filter = {}
#         for field in self.lookup_fields:
#             if self.kwargs[field]: # Ignore empty fields.
#                 filter[field] = self.kwargs[field]
#         obj = get_object_or_404(queryset, **filter)  # Lookup the object
#         self.check_object_permissions(self.request, obj)
#         return obj

class ProfileDetailView(RetrieveAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    lookup_field = 'user__pk'

class ProfileUpdateView(UpdateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileUpdateSerializer
    lookup_field = 'user__pk'
    permission_classes = (permissions.AllowAny,)
    parser_class = (FileUploadParser)
    # parser_classes = (FormParser, MultiPartParser, FileUploadParser)